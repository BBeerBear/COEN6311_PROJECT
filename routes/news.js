const express = require('express');

const router = express.Router();

const { getNews, saveNews } = require('../controllers/news');
const requireLogin = require('../middleware/requireLogin');

router.post('/api/news/get', requireLogin, getNews);
router.put('/api/saveNews/:id', requireLogin, saveNews);

module.exports = router;
