const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

//add
router.post('/', async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(saveMessage);
  } catch (err) {
    res.status(300).json(err);
  }
});
//get

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(saveMessage);
  } catch (err) {
    res.status(300).json(err);
  }
});

module.exports = router;
