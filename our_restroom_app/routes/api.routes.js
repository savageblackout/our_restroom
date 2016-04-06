var express = require('express'),
    router  = new express.Router();

// Require controllers.
var businessCtrl = require("../controllers/business_controller");

// Require token authentication.
// var token = require('../config/token_auth');

router.get("/businesses", businessCtrl.index);
router.post("/businesses", businessCtrl.create);
router.put("/businesses/:id", businessCtrl.update);
// router.get( '/users/me', token.authenticate, usersCtrl.me);

// router.post('/token',    token.create);

module.exports = router;
