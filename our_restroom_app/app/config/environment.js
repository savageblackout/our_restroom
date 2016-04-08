var _ = require('lodash');

var localEnvVars = {
  TITLE:      'OUR_Restroom',
  SAFE_TITLE: 'OUR_Restroom'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
