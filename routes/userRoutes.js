const mongoose = require('mongoose');
const User = mongoose.model('User');
const News = mongoose.model('News');

const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
  app.get('/api/user/others', requireLogin, async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  app.get('/api/user/:user_id', async ({ params: { user_id } }, res) => {
    const user = await User.findOne({
      _id: user_id,
    });
    return res.json(user);
  });

  app.post('/api/user/news/save', requireLogin, async (req, res) => {
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
      { $addToSet: { savedNews: newsId } }
    );
    res.json(newUser);
  });

  app.post('/api/user/news/like', requireLogin, async (req, res) => {
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
  });

  app.post('/api/user/news/get/savednews', requireLogin, async (req, res) => {
    // const { savedNews } = await User.findById(req.body.user._id)
    //   .select('savedNews')
    //   .exec();
    // // .populate('News');
    // console.log(savedNews);
    // const ids = savedNews.map((e) => e.news);
    // // const news = await News.find({ _id: savedNews });
    // console.log(ids);
    // // res.json(savedNews);
  });

  app.post('/api/user/profile/update', async (req, res) => {
    const { country, preferredCategories } = req.body;

    (req.user.preferredCategories = preferredCategories),
      (req.user.country = country);
    const user = await req.user.save();
    res.json(user);
  });
};
