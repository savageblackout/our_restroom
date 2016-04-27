var Business    = require("../models/business");
var nodemailer  = require("nodemailer");
var transporter = nodemailer.createTransport();
// var firstBy     = require("thenby");

// var businesses = [];
// var sorter = function(a, b) {
//   if (a.name > b.name)
//     return 1;
//   if (a.name < b.name)
//     return -1;
//   if (a.upVotes < b.upVotes)
//     return 1;
//   if (a.upVotes > b.Upvotes)
//     return -1;
//   return 0;
// }
//   businesses.sort(sorter);
//   console.log(businesses);
//   [].sort(sorter);

function index(req, res) {
  if(req.query.search){
    Business.find({}).then(function(data) {
      var reg = new RegExp(req.query.search, "i");
      data = data.filter(function(biz) {
        if(reg.test(biz.name)) return biz
      })

      res.json(data);
    }, function(err) {
      res.json(err);
    });
  } else{
    Business.find({}).sort("name").sort("upVotes")
    .then(function(data) {
      res.json(data);
    }, function(err) {
      res.json(err);
    });
  }
}


function create(req, res) {
  var business               = new Business();   // create a new instance of the business model
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


   var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ourrestroomtest@gmail.com",
      pass: "thisisatest"
    }
  })
  var mailOptions = {
    from: "OURrestroom App",
    to: "ourrestroomtest@gmail.com",
    subject: "A User Added a Business to the Database!",
    text: "The following business was added to the database: Business Name:" +business.name+ "Business Address: "+business.address1+ "&nbsp;" +business.address2+ "Business Email: " +business.email+ "Business Twitter: " +business.twitterHandle,
    html: "<p>The following business was added to the database:</p><ul><li>Business Name:" +business.name+ "</li><li>Business Address: "+business.address1+ "</li><li>Business City, State &Zip:" +business.address2+ "</li><li>Business Email: " +business.email+ "</li><li>Business Twitter: " +business.twitterHandle+ "</li></ul>"
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      console.log("Message sent: ", info.response);

    }
  })

};
var update = function(req, res) {
  var id = req.params.id;
  Business.findById(id, function(err, business) {

    if (err) {
      res.send(err);
    }

    if (req.cookies.userId) {
      if (business.upVoters.indexOf(req.cookies.userId) === -1) {
        business.upVoters.push(req.cookies.userId);
        business.upVote++;
      }
    }
    business.save(function(err, updatedBusiness) {
      if (err) {
        res.send(err);
      }
      res.json(updatedBusiness);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  update: update
};

