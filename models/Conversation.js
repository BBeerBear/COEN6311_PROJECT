const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const ConversationSchema = new mongoose.Schema(
  {
    members:{
        type:Array,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Conversation', ConversationSchema);
