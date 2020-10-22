
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./index.ie11.production.min.js')
} else {
  module.exports = require('./index.ie11.development.js')
}
