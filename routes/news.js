const express = require('express');

const router = express.Router();

const { getNews, rateNews } = require('../controllers/news');
const requireLogin = require('../middleware/requireLogin');

router.post('/api/getNews', requireLogin, getNews);
router.put('/api/rateNews/:star', requireLogin, rateNews);

module.exports = router;
