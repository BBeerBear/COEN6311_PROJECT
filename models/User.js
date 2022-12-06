const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
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
          required: true,
        },
      },
    ],
    activities: {
      type: Array,
      default: [],
    },
    friends: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    requests: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    blocks: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    search: [
      {
        user: {
          type: ObjectId,
          ref: 'User',
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
      },
    ],
    onlineTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
