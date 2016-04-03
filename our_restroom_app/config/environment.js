var _ = require('lodash');

var localEnvVars = {
  TITLE:      'our_restroom_app',
  SAFE_TITLE: 'our_restroom_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
