var Search = require("../models/search");
// var request = require("request");

var bizName;

var searchIndex = function(req, res) {
  var query = {};
  if(req.query.bizName){
    query = {
      bizName: new RegExp(re.query.bizName, "i")
    };
  }
  Search.find(query, function(err, bizNames) {
    if(err){
      res.send("This is a back-end error");
    } res.json(bizNames);
    $log.info("first test: ", bizNames);
  });
}
module.exports = {
  searchIndex: searchIndex
}
