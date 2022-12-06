const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');
const requireLogin = require('../middleware/requireLogin');

//new conv
router.post('/api/conversations', requireLogin, async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const check = await Conversation.find({
      members: [req.body.senderId, req.body.receiverId],
    });
    if (check.length > 0) {
      return res.status(400).json({ message: 'Already exist' });
    }
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get con of a user
router.get('/api/conversations/:userId', requireLogin, async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
