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
  business.address2          = req.body.address;
  business.email             = req.body.email;
  business.twitterHandle     = req.body.twitterHandle;

  business.save(function(err, savedBusiness) {
    if (err) {
      res.send(err)
    }

    // log a message
    console.log("What a business!")
    // return the business
    res.json(savedBusiness);
  });
};

// function create(req, res, next) {
//   Business
//     .create(req.body)
//     .then(function(business) {
//       res.json({
//         success: true,
//         message: 'Successfully created business.',
//         data: {
//           business.name              = req.body.name;
//           business.address1          = req.body.address1;
//           business.address2          = req.body.address2;
//           business.email             = req.body.email;
//           business.twitterHandle     = req.body.twitterHandle;
//         }
//       });
//     }).catch(function(err) {
//       if (err) {
//         res.send(err);
//       }
//     });
// };

module.exports = {
  index: index,
  create: create
};

