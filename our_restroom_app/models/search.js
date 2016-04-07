var mongoose = require("mongoose"),
    debug = require("debug")("app:models");

var searchSchema = new mongoose.Schema({
  name: {type: String, index: true},
  address1: { type: String },
  address2: { type: String },
});

var Search = mongoose.model("Search", searchSchema);

module.exports = Search;
