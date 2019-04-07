var mongoose = require('mongoose')
var shcema = mongoose.Schema

var profileSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  memo: {
    type: Number,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  comments: {
    type: [String]
  },
  datePassed: {
    type: String
  },
  hashtag: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Profile', profileSchema)
