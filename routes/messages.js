const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const Message = require('../models/Message');

const router = express.Router();

//add
router.post('/api/messages', requireLogin, async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(300).json(err);
  }
});

//get all the messages related with one conversation
router.get('/api/messages/:conversationId', async (req, res) => {
  try {
    console.log('backend' + req.params.conversationId);
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(300).json(err);
  }
});

module.exports = router;
