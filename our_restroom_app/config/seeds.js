var mongoose = require('./database');

var Rest = require('../models/rest');

var rests = [
  { // 0
    name: "Olive Garden",
    address: "123 Main Street",
    description: "love this place, but bad bathroom sitch"
  },
  { // 1
   name: "Ruby Tuesday",
   address: "125 Main Street",
   description: "spoke with the manager, could use a gentle nudge"
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + rests.length  + " users.");
      mongoose.connection.close(function(err) {
        if (err) console.log(err);
        process.exit(0);
      });
    }
  });
});
