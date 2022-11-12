//don't commit this
if (process.env.NODE_ENV === 'production') {
  // in prod, return the prod set of keys
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
