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
   address2: "Newark, NJ 90210",
   email: "rubye@email.com",
   twitterHandle: "@rt",
   upVote: 45

  },
  { // 2
   name: "Sizzler",
   address1: "126 Main Street",
   address2: "Newark, DE 90210",
   email: "sizzler@email.com",
   twitterHandle: "@rb",
   upVote: 29

  },
  { // 3
   name: "Red Lobster",
   address1: "125 Main Street",
   address2: "Rockville, MD 90210",
   email: "hot_saucee@email.com",
   twitterHandle: "@rlobster",
   upVote: 34

  },
  { // 4
   name: "T.G.I.Fridays",
   address1: "12 Main Street",
   address2: "New Haven, CT 90210",
   email: "tgife@email.com",
   twitterHandle: "@tgif",
   upVote: 100

  }
];

Business.remove({}, function(err, succ){
  if(err) console.log(err);
  Business.create(businesses, function(err, businesses){
    if(err) console.log(err);
    console.log("Businesses created: ", businesses.length)
  });
});


