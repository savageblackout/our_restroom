var express = require("express"),
    router  = new express.Router(),
    nodemailer = require("nodemailer");

// Require controllers.
var businessCtrl = require("../controllers/business_controller");
var contactCtrl  = require("../controllers/contact_controller");
var mailingCtrl  = require("../controllers/mailing_controller");


// BUSINESS ROUTES
router.get("/businesses", businessCtrl.index);
router.post("/businesses", businessCtrl.create);
router.put("/businesses/:id", businessCtrl.update);

// CONTACT ROUTES
router.get("/contacts", contactCtrl.index);
router.post("/contacts", contactCtrl.create);

// MAILING ROUTES
router.get("/mailings", mailingCtrl.index);
router.post("/mailings", mailingCtrl.create);

module.exports = router;
