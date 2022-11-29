const User = require('../models/User');
const News = require('../models/News');

exports.saveNews = async (req, res) => {
  try {
    const {
      source: { id, name },
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = req.body.news;
    const newsExist = await News.findOne({ url });
    let newsId;
    if (!newsExist) {
      const saveOneNews = await new News({
        source: { id, name },
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
      }).save();
      newsId = saveOneNews._id;
    } else {
      newsId = newsExist._id;
    }
    const user = await User.findById(req.user.id);
    const check = user?.savedNews.find(
      (news) => news.news.toString() == newsId
    );
    if (check) {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: {
          savedNews: {
            _id: check._id,
          },
        },
      });
    } else {
      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          savedNews: {
            news: newsId,
            savedAt: new Date(),
          },
        },
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.likeNews = async (req, res) => {
  try {
    const {
      source: { id, name },
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = req.body.news;
    const user = req.body.user;
    const newsExist = await News.findOne({ url });
    if (!newsExist) {
      await new News({
        source: { id, name },
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content,
      }).save();
    }
    const { _id: newsId } = await News.findOne({ url });
    const newUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $addToSet: { likedNews: newsId } }
    );
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(req.user._id);
    const profile = await User.findById(userId);
    const friendship = {
      friends: false,
      following: false,
      requestSent: false,
      requestReceived: false,
      block: false,
    };
    if (!profile) {
      return res.json({ ok: false });
    }
    if (
      user.friends.includes(profile._id) &&
      profile.friends.includes(user._id)
    ) {
      friendship.friends = true;
    }
    if (user.following.includes(profile._id)) {
      friendship.following = true;
    }
    if (user.requests.includes(profile._id)) {
      friendship.requestReceived = true;
    }
    if (profile.requests.includes(user._id)) {
      friendship.requestSent = true;
    }
    if (profile.blocks.includes(user._id)) {
      friendship.block = true;
    }
    await profile.populate('friends');
    await profile.populate('savedNews.news');
    res.json({ ...profile.toObject(), friendship });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const { preferredCategories, country } = req.body.infos;
    const updatedProfile = await User.findByIdAndUpdate(
      req.user.id,
      {
        preferredCategories,
        country,
      },
      { new: true }
    );
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.addFriend = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (
        !receiver.requests.includes(sender._id) &&
        !receiver.friends.includes(sender._id)
      ) {
        await receiver.updateOne({
          $push: { requests: sender._id },
        });
        await receiver.updateOne({
          $push: { followers: sender._id },
        });
        await sender.updateOne({
          $push: { following: receiver._id },
        });
        res.json({ message: 'friend request has been sent' });
      } else {
        return res.status(400).json({ message: 'Already sent' });
      }
    } else {
      return res
        .status(400)
        .json({ message: "You can't send a request to yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.cancelRequest = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (
        receiver.requests.includes(sender._id) &&
        !receiver.friends.includes(sender._id)
      ) {
        await receiver.updateOne({
          $pull: { requests: sender._id },
        });
        await receiver.updateOne({
          $pull: { followers: sender._id },
        });
        await sender.updateOne({
          $pull: { following: sender._id },
        });
        res.json({ message: 'you successfully canceled request' });
      } else {
        return res.status(400).json({ message: 'Already Canceled' });
      }
    } else {
      return res
        .status(400)
        .json({ message: "You can't cancel a request to yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.follow = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (
        !receiver.followers.includes(sender._id) &&
        !sender.following.includes(receiver._id)
      ) {
        await receiver.updateOne({
          $push: { followers: sender._id },
        });

        await sender.updateOne({
          $push: { following: receiver._id },
        });
        res.json({ message: 'follow success' });
      } else {
        return res.status(400).json({ message: 'Already following' });
      }
    } else {
      return res.status(400).json({ message: "You can't follow yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.unfollow = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (
        receiver.followers.includes(sender._id) &&
        sender.following.includes(receiver._id)
      ) {
        await receiver.updateOne({
          $pull: { followers: sender._id },
        });

        await sender.updateOne({
          $pull: { following: receiver._id },
        });
        res.json({ message: 'unfollow success' });
      } else {
        return res.status(400).json({ message: 'Already not following' });
      }
    } else {
      return res.status(400).json({ message: "You can't unfollow yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.acceptRequest = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const receiver = await User.findById(req.user._id);
      const sender = await User.findById(req.params.id);
      if (receiver.requests.includes(sender._id)) {
        await receiver.update({
          $push: { friends: sender._id, following: sender._id },
        });
        await sender.update({
          $push: { friends: receiver._id, followers: receiver._id },
        });
        await receiver.updateOne({
          $pull: { requests: sender._id },
        });
        res.json({ message: 'friend request accepted' });
      } else {
        return res.status(400).json({ message: 'Already friends' });
      }
    } else {
      return res
        .status(400)
        .json({ message: "You can't accept a request from  yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.unfriend = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (
        receiver.friends.includes(sender._id) &&
        sender.friends.includes(receiver._id)
      ) {
        await receiver.update({
          $pull: {
            friends: sender._id,
            following: sender._id,
            followers: sender._id,
          },
        });
        await sender.update({
          $pull: {
            friends: receiver._id,
            following: receiver._id,
            followers: receiver._id,
          },
        });

        res.json({ message: 'unfriend request accepted' });
      } else {
        return res.status(400).json({ message: 'Already not friends' });
      }
    } else {
      return res.status(400).json({ message: "You can't unfriend yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteRequest = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const receiver = await User.findById(req.user._id);
      const sender = await User.findById(req.params.id);
      if (receiver.requests.includes(sender._id)) {
        await receiver.update({
          $pull: {
            requests: sender._id,
            followers: sender._id,
          },
        });
        await sender.update({
          $pull: {
            following: receiver._id,
          },
        });
        res.json({ message: 'delete request accepted' });
      } else {
        return res.status(400).json({ message: 'Already deleted' });
      }
    } else {
      return res.status(400).json({ message: "You can't delete yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.block = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (!sender.blocks.includes(receiver._id)) {
        await receiver.update({
          $pull: {
            friends: sender._id,
            following: sender._id,
            followers: sender._id,
          },
        });
        await sender.update({
          $pull: {
            friends: receiver._id,
            following: receiver._id,
            followers: receiver._id,
          },
          $push: {
            blocks: receiver._id,
          },
        });

        res.json({ message: 'unfriend request accepted' });
      } else {
        return res.status(400).json({ message: 'Already blocked' });
      }
    } else {
      return res.status(400).json({ message: "You can't block yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.unblock = async (req, res) => {
  try {
    if (req.user._id !== req.params.id) {
      const sender = await User.findById(req.user._id);
      const receiver = await User.findById(req.params.id);
      if (sender.blocks.includes(receiver._id)) {
        await sender.update({
          $pull: {
            blocks: receiver._id,
          },
        });
        res.json({ message: 'unblock request accepted' });
      } else {
        return res.status(400).json({ message: 'Already unblock' });
      }
    } else {
      return res.status(400).json({ message: "You can't unblock yourself" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.saveActivity = async (req, res) => {
  try {
    const activity = req.body.activity;
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { activities: activity } }
    );
    res.json({ message: 'save activity successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.saveOnlineTime = async (req, res) => {
  try {
    const onlineTime = req.body.onlineTime + req.user.onlineTime;
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: { onlineTime: onlineTime } }
    );

    res.json({ message: 'save online time successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
