const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  // date: Date.now
  data: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Posts', postSchema)