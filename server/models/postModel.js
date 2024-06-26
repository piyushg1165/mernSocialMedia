const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
  caption: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
},
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
