const express = require('express');

const router = express.Router();

const { saveNews, likeNews, getProfile } = require('../controllers/user');
const requireLogin = require('../middleware/requireLogin');

router.post('/api/user/news/save', requireLogin, saveNews);

router.post('/api/user/news/like', requireLogin, likeNews);

router.post('/api/user/news/get/savednews', requireLogin, async (req, res) => {
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

router.post('/api/user/profile/update', requireLogin, async (req, res) => {
  // const { country, preferredCategories } = req.body;
  // (req.user.preferredCategories = preferredCategories),
  //   (req.user.country = country);
  // const user = await req.user.save();
  // res.json(user);
});
router.get('/api/getProfile/:userId', requireLogin, getProfile);

module.exports = router;
