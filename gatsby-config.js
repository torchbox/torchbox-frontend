var autoprefixer = require('autoprefixer')
var browserslist = require('browserslist')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Torchbox`,
    description: ``,
    author: `@Torchbox`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/fonts/'],
        postCssPlugins: [
          autoprefixer({
            grid: 'autoplace',
            browsers: browserslist()
          }),
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `torchbox`,
        short_name: `Torchbox`,
        start_url: `/`,
        background_color: `#2f128d`,
        theme_color: `#fd5765`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wagtail",
        fieldName: 'wagtail',
        url: process.env.GATSBY_WAGTAIL_ENDPOINT || 'http://localhost:8000/graphql/',
        // refetchInterval: 10,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: true,             // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox even when doing so is possible (default)
          cleanupIDs: false,    // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [`query-string`, `strict-uri-encode`]
      }
    },
  ],
}
