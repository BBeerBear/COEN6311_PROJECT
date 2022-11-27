const User = require('../models/User');
const News = require('../models/News');

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
    const profile = await User.findById(userId);
    if (!profile) {
      return res.json({ ok: false });
    }

    res.json(profile);
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
