var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var businessSchema = new mongoose.Schema({
  name:  { type: String, unique: true },
  address1: { type: String },
  address2: { type: String },
  email: { type: String, required: false },
  twitterHandle: { type: String, required: false },
  upVote: { type: Number, default: 0 },
  upVoters: [{type: String}],
  normalized: { type: String }
});

var Business = mongoose.model('Business', businessSchema);

module.exports = Business;
