const pathMappings = require('./path-mappings.json')

module.exports = function (api) {
  api.cache(true)

  return {
    "presets": [
      [
        "babel-preset-gatsby",
        {
          "targets": {
            "browsers": [">0.25%", "not dead"]
          }
        }
      ]
    ],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": pathMappings
      }]
    ]
  }
}
