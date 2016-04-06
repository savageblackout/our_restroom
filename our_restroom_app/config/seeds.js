var mongoose = require('./database');

var Business = require('../models/business');

var businesses = [
  { // 0
    name: "Olive Garden",
    address1: "123 Main Street",
    address2: "New York, NY 90210",
    email: "example@email.com",
    twitterHandle: "@og",
    upVote: 5

  },
  { // 1
   name: "Ruby Tuesday",
   address1: "125 Main Street",
   address2: "New York, NY 90210",
   email: "example@email.com",
   twitterHandle: "@rb",
   upVote: 45

  }
];

Business.remove({}, function(err, succ){
  if(err) console.log(err);
  Business.create(businesses, function(err, businesses){
    if(err) console.log(err);
    console.log("Businesses created: ", businesses.length)
  });
});


