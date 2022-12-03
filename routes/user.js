const express = require('express');

const router = express.Router();

const {
  likeNews,
  saveNews,
  getProfile,
  updateProfile,
  addFriend,
  cancelRequest,
  acceptRequest,
  follow,
  unfollow,
  unfriend,
  deleteRequest,
  block,
  unblock,
  saveActivity,
  saveOnlineTime,
  getFriendsPageInfos,
} = require('../controllers/user');

const requireLogin = require('../middleware/requireLogin');

router.post('/api/user/news/like', requireLogin, likeNews);
router.get('/api/getProfile/:userId', requireLogin, getProfile);
router.put('/api/updateProfile', requireLogin, updateProfile);
router.put('/api/addFriend/:id', requireLogin, addFriend);
router.put('/api/cancelRequest/:id', requireLogin, cancelRequest);
router.put('/api/follow/:id', requireLogin, follow);
router.put('/api/unfollow/:id', requireLogin, unfollow);
router.put('/api/acceptRequest/:id', requireLogin, acceptRequest);
router.put('/api/unfriend/:id', requireLogin, unfriend);
router.put('/api/deleteRequest/:id', requireLogin, deleteRequest);
router.put('/api/block/:id', requireLogin, block);
router.put('/api/unblock/:id', requireLogin, unblock);
router.put('/api/saveNews', requireLogin, saveNews);
router.put('/api/saveActivity', requireLogin, saveActivity);
router.put(`/api/saveOnlineTime`, requireLogin, saveOnlineTime);
router.get(`/api/getFriendsPageInfos`, requireLogin, getFriendsPageInfos);
  module.exports = router;
