var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var businessSchema = new mongoose.Schema({
  name:  { type: String },
  address1: { type: String },
  address2: { type: String },
  email: { type: String, required: false },
  twitterHandle: { type: String, required: false }
});

var Business = mongoose.model('Business', businessSchema);

module.exports = Business;
