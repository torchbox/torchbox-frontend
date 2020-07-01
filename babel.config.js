const pathMappings = require('./path-mappings.json')
var browserslist = require('browserslist')

module.exports = function (api) {
  api.cache(true)

  return {
    "presets": [
      [
        "babel-preset-gatsby",
        {
          "targets": {
            "browsers": browserslist()
          }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-proposal-optional-chaining",
      ["module-resolver", {
        "root": ["./"],
        "alias": pathMappings
      }]
    ]
  }
}
