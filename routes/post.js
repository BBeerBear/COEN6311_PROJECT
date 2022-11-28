const express = require('express');
const { createPost } = require('../controllers/post');
const requireLogin = require('../middleware/requireLogin');

const router = express.Router();

router.post('/createPost', requireLogin, createPost);

module.exports = router;
