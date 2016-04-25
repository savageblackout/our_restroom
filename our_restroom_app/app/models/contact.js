var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var contactSchema = new mongoose.Schema({
  name:  { type: String },
  email: { type: String, required: true, uniqueness: true },
  message: { type: String }
 });

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
