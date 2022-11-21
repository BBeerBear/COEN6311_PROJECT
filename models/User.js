const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema;

const userSchema = new Schema(
  {
    googleId: String,
    facebookId: String,
    name: String,
    email: String,
    picture: String,

    country: String,
    preferredCategories: {
      type: Array,
      default: [],
    },
    savedNews: [
      {
        news: {
          type: ObjectId,
          ref: 'News',
        },
      },
    ],
    likedNews: [
      {
        news: {
          type: ObjectId,
          ref: 'News',
        },
      },
    ],
    activities: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
