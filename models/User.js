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
        savedAt: {
          type: Date,
          default: new Date(),
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
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
