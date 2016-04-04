var express = require('express'),
    router  = new express.Router();

// Require controllers.
var educateCtrl = require('../educate.controller');

// Require token authentication.
// var token = require('../config/token_auth');

// users resource paths:
router.post('/educates',    educateCtrl.create);
// router.get( '/users/me', token.authenticate, usersCtrl.me);

// router.post('/token',    token.create);

module.exports = router;
