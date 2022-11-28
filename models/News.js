const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const newsSchema = mongoose.Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: {
    type: String,
    unique: true,
  },
  urlToImage: String,
  publishedAt: String,
  content: String,
  rating: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
      },
      star: String,
    },
  ],
});

mongoose.model('News', newsSchema);
