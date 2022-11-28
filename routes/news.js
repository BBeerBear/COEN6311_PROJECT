const express = require('express');

const router = express.Router();

const { getNews, updateNews } = require('../controllers/news');
const requireLogin = require('../middleware/requireLogin');

router.post('/api/getNews', requireLogin, getNews);
router.put('/api/updateNews/:star', requireLogin, updateNews);

module.exports = router;
