const express = require('express');

const router = express.Router();

const { likeNews, getProfile, updateProfile } = require('../controllers/user');

const requireLogin = require('../middleware/requireLogin');

router.post('/api/user/news/like', requireLogin, likeNews);
router.post('/api/user/profile/update', requireLogin, async (req, res) => {
  // const { country, preferredCategories } = req.body;
  // (req.user.preferredCategories = preferredCategories),
  //   (req.user.country = country);
  // const user = await req.user.save();
  // res.json(user);
});
router.get('/api/getProfile/:userId', requireLogin, getProfile);
router.put('/api/updateProfile', requireLogin, updateProfile);

module.exports = router;
