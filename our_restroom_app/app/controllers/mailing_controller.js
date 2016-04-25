var Mailing = require("../models/mailing");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport();

function index(req, res) {
  Mailing.find({}).then(function(data) {
    res.json(data);
  }, function(err) {
    res.json(err);
  });
}

function create(req, res) {
  var mailing      = new Mailing();
  var data         = req.body;

  mailing.name              = req.body.name;
  mailing.email             = req.body.email;


  mailing.save(function(err, savedMailing) {
    if (err) {
      res.send(err)
    }

    // return the mailing
    res.json(savedContact);
  });

    // receive an email when user provides name/email mailing
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ourrestroomtest@gmail.com",
      pass: "thisisatest"
    }
  })
  var mailOptions = {
    from: mailing.name,
    to: "ourrestroomtest@gmail.com",
    subject: "User Added to Mailing List",
    text: "Hi! I would like to be added to the mailing list to receive OURrestroom updates. Name:" +mailing.name+ "Email: "+mailing.email,
    html: "<p>Hi! I would like to be added to the mailing list to receive OURrestroom updates.</p><ul><li>Name:" +mailing.name+ "</li><li>Email: "+mailing.email+ "</li></ul>"
  };
  console.log(req.body);
  transporter.sendMail(mailOptions, function(err, info) {
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      console.log("Message sent: ", info.response);
      // res.redirect("/");
    }
  })

};

module.exports = {
  index: index,
  create: create
}
