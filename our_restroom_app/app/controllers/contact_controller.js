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
  var contact      = new Contact();
  var data         = req.body;

  contact.name              = req.body.name;
  contact.email             = req.body.email;
  contact.message           = req.body.message;


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
    from: contact.name,
    to: "ourrestroomtest@gmail.com",
    subject: "User Contact Received",
    text: "You have received a message via the OURrestroom contact form. Name:" +contact.name+ "Email: "+contact.email+ "Message: "+contact.message,
    html: "<p>You have received a message via the OURrestroom contact form.</p><ul><li>Name:" +contact.name+ "</li><li>Email: "+contact.email+ "</li><li>Message: "+contact.message+"</li></ul>"
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
