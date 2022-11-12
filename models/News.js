const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  id: String,
  articleTitle: String,
  imgUrl: String,
  newsUrl: String,
  keywords: [String],
  snippet:String,
  category: String,
  geo: String,
});

mongoose.model('news', newsSchema);
