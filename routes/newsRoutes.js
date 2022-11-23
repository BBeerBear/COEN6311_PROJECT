const express = require('express');

const router = express.Router();

const requireLogin = require('../middleware/requireLogin');
const { getNews } = require('../controllers/news');

router.post('/api/news/get', requireLogin, getNews);

module.exports = router;
