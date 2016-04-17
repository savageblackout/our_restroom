var Contact = require("../models/contact");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport();

function index(req, res) {
  Contact.find({}).then(function(data) {
    res.json(data);
  }, function(err) {
    res.json(err);
  });
}

function create(req, res) {
  var contact      = new Contact();   // create a new instance of the contact model
  var data         = req.body;

  contact.name              = req.body.name;
  contact.email             = req.body.email;


  contact.save(function(err, savedContact) {
    if (err) {
      res.send(err)
    }

    // return the contact
    res.json(savedContact);
  });

    // receive an email when user provides name/email contact
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "ourrestroomtest@gmail.com",
      pass: "thisisatest"
    }
  })
  var mailOptions = {
    from: "John Doe <johndoe@email.com>",
    to: "ourrestroomtest@gmail.com",
    subject: "Website Submission",
    text: "you have a new submission with the following details...Name: '+req.body.name+ ' Email: '+req.body.email+ '",
    html: "<p>you have a new submission with the following details:</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li></ul>"
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      console.log("Message sent: ", info.response);
      res.redirect("/");
    }
  })

};

module.exports = {
  index: index,
  create: create
}
