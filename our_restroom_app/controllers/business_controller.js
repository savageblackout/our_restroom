var Business = require("../models/business");

function index(req, res) {
  Business.find({}).then(function(data) {
    res.json(data);
  }, function(err) {
    res.json(err);
  });
}

function create(req, res) {
  var business       = new Business();   // create a new instance of the business model

  console.log(req.body);
  business.name              = req.body.name;
  business.address1          = req.body.address1;
  business.address2          = req.body.address2;
  business.email             = req.body.email;
  business.twitterHandle     = req.body.twitterHandle;
  business.upVote            = req.body.upVote;

  business.save(function(err, savedBusiness) {
    if (err) {
      res.send(err)
    }

    // return the business
    res.json(savedBusiness);
  });
};
var update = function(req, res) {
  var id = req.params.id;

  Business.findById(id, function(err, business) {

    if (err) {
      res.send(err);
    }

    // set the new fish information if it exists in the request
    if (req.body.upVote) business.upVote = req.body.upVote;
    // if (req.body.category) fish.category = req.body.category;

    // save the fish
    business.save(function(err, updatedBusiness) {
      if (err) {
        res.send(err);
      }
      // log a message
      console.log("saved upVote");
      // return the fish
      res.json(updatedBusiness);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  update: update
};

