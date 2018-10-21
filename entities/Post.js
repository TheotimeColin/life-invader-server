const mongoose = require('mongoose')
const PostFixtures = require('../fixtures/Posts')

const PostSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  creation_date: {
    type: Date,
    required: true
  }
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post
