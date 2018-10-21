const mongoose = require('mongoose')
const Post = require('../entities/Post')
const User = require('../entities/User')

const PostFixtures = require('../fixtures/Posts')

module.exports = async function (req, res) {
  
  /*PostFixtures.forEach(async (post) => {
    var query = { _id: post._id }

    let userCount = await User.count()
    let random = Math.floor(Math.random() * userCount)
    let randomUser = await User.findOne().skip(random)
    
    post.user = randomUser._id
    
    let result = await Post.findOneAndUpdate(query, post, { upsert: true })
  })*/
  
  let errors = []
  
  let posts = await Post.find(null, null, { limit: 30 }).sort({ creation_date: 'desc' }).populate('user')

  res.send({
    posts: posts
  })
}
