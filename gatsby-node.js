// Use esm to allow importing ES6 modules in gatsby-node.esm.js
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')
