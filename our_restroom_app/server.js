var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var debug        = require('debug')('app:http');
var cookie       = require('cookie');
var cookieParser = require('cookie-parser');
var env          = require('dotenv');
var nodemailer   = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

/*
 * SETUP
 */

// Load local libraries.
var env      = require('./app/config/environment'),
    mongoose = require('./app/config/database');
    routes   = require('./app/config/api.routes');

// Instantiate a server application.
var app = express();

// Configure the application (and set it's title!).
app.set('title', process.env.TITLE);
app.set('safe-title', process.env.SAFE_TITLE);

// Create local variables for use throughout the application.
app.locals.title = app.get('title');

/*
 * MIDDLEWARE STACK
 */
app.use(cookieParser());
 // Assign a unique id to anonymous users to
 // to limit the amout of upVote clicks per biz, per site visitor
 app.use(function(req, res, next) {
    console.log(req.cookies);
  if(!req.cookies.userId) {
    res.cookie("userId", Date.now(), { maxAge: 900000, httpOnly: true });
  }
  next();
 });

// CORS allows a separate client, like Postman, to send requests
// (in development only…)
if (app.get('env') === 'development') {
  app.use(allowCors); // See helper at bottom.
}

// Logging layer.
app.use(logger('dev'));

// Static routing layer.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// Parse and debug requests.
app.use(bodyParser.json());
app.use(debugReq);

// Validate content-type.
app.use(validateContentType);

// Our routes.
app.use('/api', routes);

// Catches all 404 routes.
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error-handling layer(s).
app.use(addFailedAuthHeader);
app.use(function(err, req, res, next) {
  var message = err.message,
      status  = err.status || 500;

  res.status(status);

  if (app.get('env') === 'development' && status === 500) {
    res.json({
      message: message,
      error: err
    });
  } else {
    res.json(message);
  }
});

/*
 * HELPERS
 */

function debugReq(req, res, next) {
  debug('params:', req.params);
  debug('query:',  req.query);
  debug('body:',   req.body);
  next();
}

function validateContentType(req, res, next) {
  var methods = ['PUT', 'PATCH', 'POST'];
  if (                                    // If the request is
    methods.indexOf(req.method) !== -1 && // one of PUT, PATCH or POST, and
    Object.keys(req.body).length !== 0 && // has a body that is not empty, and
    !req.is('json')                       // does not have an application/json
  ) {                                     // Content-Type header, then …
    var message = 'Content-Type header must be application/json.';
    res.status(400).json(message);
  } else {
    next();
  }
}

function allowCors(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  // Handle "preflight" requests.
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
}

// When there is a 401 Unauthorized, the repsonse shall include a header
// WWW-Authenticate that tells the client how they must authenticate
// their requests.
function addFailedAuthHeader(err, req, res, next) {
  var header = {'WWW-Authenticate': 'Bearer'};
  if (err.status === 401) {
    if (err.realm) header['WWW-Authenticate'] += ` realm="${err.realm}"`;
    res.set(header);
  }
  next(err);
}

module.exports = app;
