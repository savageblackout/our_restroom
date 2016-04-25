var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var mailingSchema = new mongoose.Schema({
  name:    { type: String },
  email:   { type: String, required: true, uniqueness: true }
 });

var Mailing = mongoose.model('Mailing', mailingSchema);

module.exports = Mailing;
