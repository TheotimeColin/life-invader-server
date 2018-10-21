const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserFixtures = require('../fixtures/Users')

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  id: {
    type: String,
    unique: true,
    required: true
  },
  index: {
    type: Number
  },
  phone: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  profile_picture: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
})

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err)
    this.password = hash
    next()
  })
})

const User = mongoose.model('User', UserSchema)

/*
UserFixtures.forEach((user) => {
  var query = { id: user.id }
  User.findOneAndUpdate(query, user, { upsert: true }, (err, user) => {
    if (err) return console.error(err)
  })
})
*/

module.exports = User
