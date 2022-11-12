const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const realatedNewSchema = new Schema({
  articleTitle: String,
  source: String,
  time: String,
  snippet: String,
});

const newsSchema = new Schema({
  id: String,
  newsUrl: String,
  imgUrl: String,
  source: String,
  relatedNews: [realatedNewSchema],
  entityNames: [String],
  category: String,
  geo: String,
});

mongoose.model('news', newsSchema);
