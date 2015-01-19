var mongoose = require('mongoose');

var module.exports = mongoose.model('Post', {
  name: String,
  text: String
});