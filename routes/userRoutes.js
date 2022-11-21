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
    } = req.body.trend;

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
    const news = await News.findOne({ url });
    req.user.savedNews = [...req.user.savedNews, news._id];
    const user = await req.user.save();
    res.json(user);
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
    } = req.body.trend;

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
    const news = await News.findOne({ url });
    // update user and return
    req.user.likedNews = [...req.user.likedNews, news._id];
    const user = await req.user.save();
    res.json(user);
  });

  app.post('/api/user/profile/update', async (req, res) => {
    const { country, preferredCategories } = req.body;

    (req.user.preferredCategories = preferredCategories),
      (req.user.country = country);
    const user = await req.user.save();
    res.json(user);
  });
};
