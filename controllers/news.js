const keys = require('../config/keys');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(keys.newsAPIKEY);

exports.getNews = (req, res) => {
  try {
    const { q, searchIn, category, language, country, page, pageSize } =
      req.body;
    //get news from newsapi by params
    newsapi.v2
      .topHeadlines(
        Object.fromEntries(
          Object.entries({
            q: q,
            searchIn: searchIn,
            // sources: 'bbc-news,the-verge',
            // domains: 'bbc.co.uk, techcrunch.com',
            // from: '2017-12-01',
            // to: '2017-12-12',
            language: 'en',
            sortBy: 'popularity',
            country: country,
            category: category,
            pageSize: pageSize,
            page: page,
          }).filter(([_, v]) => v != null)
        )
      )
      .then((data) => {
        res.json(data.articles);
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
