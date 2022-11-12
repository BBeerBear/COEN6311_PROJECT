const googleTrends = require('google-trends-api');
const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const News = mongoose.model('news');

module.exports = (app) => {
  let trends;

  //get news from mongodb by categories and location
  app.post('/api/mongodb/get', requireLogin, async (req, res) => {
    const { geo, categories } = req.body;
    let news;
    if (!geo) {
      news = await News.find({ category: categories });
    } else {
      news = await News.find({ geo: geo, category: categories });
    }
    res.json(news);
  });

  app.post('/api/googletrends/get', requireLogin, (req, res) => {
    const { geo, categories } = req.body;
    googleTrends.realTimeTrends(
      {
        geo: geo,
        category: categories,
      },
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          const trends = JSON.parse(results).storySummaries.trendingStories;
          const newTrends = trends.map((trend) => ({
            id: trend.id,
            articleTitle: trend.articles[0].articleTitle,
            imgUrl: trend.image.imgUrl,
            newsUrl: trend.image.newsUrl,
            snippet: trend.articles[0].snippet,
            keywords: trend.entityNames,
          }));
          console.log(newTrends);
          res.json(newTrends);
        }
      }
    );
  });

  //save news to monogodb by categories and location
  app.post(
    '/api/googletrends/save',
    requireLogin,
    async (req, res) => {
      const { categories, geo } = req.body;
      console.log(categories);
      categories.map((category) =>
        googleTrends.realTimeTrends(
          {
            geo: geo,
            category: category,
          },
          function (err, results) {
            if (err) {
              // trends = status(500).json({ error: err });
              return;
            } else {
              trends = JSON.parse(results).storySummaries.trendingStories;
              trends.map(async (trend) => {
                const existingNew = await News.findOne({
                  id: trend.id,
                });
                if (existingNew) {
                  return;
                }
                const news = await new News({
                  id: trend.id,
                  title: trend.title,
                  imgUrl: trend.image.imgUrl,
                  newsUrl: trend.image.newsUrl,
                  category: category,
                  geo: geo,
                }).save();
                return;
              });
            }
          }
        )
      );
    }
    // // Successful authentication, redirect home.
    // res.json(trends);
  );
  // ['all', 'e', 'b', 't', 'h', 's', 'm']
  googleTrends.realTimeTrends(
    {
      geo: 'US',
      category: 'm',
    },
    function (err, results) {
      console.log('fetch');
      if (err) {
        // trends = status(500).json({ error: err });
        return;
      } else {
        trends = JSON.parse(results).storySummaries.trendingStories;
        trends.map(async (trend) => {
          const existingNew = await News.findOne({
            id: trend.id,
          });
          if (existingNew) {
            return;
          }
          const news = await new News({
            id: trend.id,
            articleTitle: trend.articles[0].articleTitle,
            imgUrl: trend.image.imgUrl,
            newsUrl: trend.image.newsUrl,
            snippet: trend.articles[0].snippet,
            keywords: trend.entityNames,
            category: 'm',
            geo: 'US',
          }).save();
          console.log(news);
          return;
        });
      }
    }
  );
};
