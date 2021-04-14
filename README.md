# Torchbox.com Gatsby Frontend

*Note: this repo is no longer used as part of the Torchbox site*

This was the front-end component torchbox.com site for the period when it was a headless Wagtail site with a gatsby front-end.

Notes below are for historical reference.

It is a Gatsby site, hosted on Netlify, currently at https://torchbox.staging.torchbox.com.

To develop locally you need to have the [backend headless Wagtail CMS](https://github.com/torchbox/wagtail-torchbox/) running locally or on the server (see 'configure' below).

Overall architectural details of the site can be found in the back-end readme.

## 🚀 Quick start

1.  **Download & Install.**

   `git clone https://github.com/torchbox/torchbox-frontend`
   `npm install`

2.  **Configure.**

    If you don't want to run the backend component locally then you will have to change the `http://localhost:8000/graphql/` string in your `gatsby-config.js`. To use the live site CMS use `https://cms.torchbox.com/graphql/`. Obviously don't edit the live CMS data to test your changes though, and don't commit the change to the `gatsby-config.js` file.

    Note that if you change the endpoint in `gatsby-config.json` you need to restart gatsby to pick up the changes. A restart is also often needed to pick up changes published in the CMS.


3.  **Start Developing!**

    You can run dev mode by executing the following command:

    `npm start // Runs dev server on port 800*`

    You can also build and preview production code using:

    `npm run build // Builds prod code`

## 🧐 Useful things to know:
  #### Prettier & Eslint are both used.
  Please make your code pretty and eslint to make sure you aren't shipping badly
  typed components. Eslint will also complain about the order of the imports. Please keep them tidy :) (If you want to know more about the import ordering then you can look in the eslint config file).

  #### Gatsby builds will break if Wagtail returns an error.
  If you have bad request or your code doesn't handle null values then the build will fail (remember building a gatsby site runs all your react code locally (or in CI) to produce loads of HTML files).

  #### It is necessary to re-run `npm start` if you update data in the CMS
  Otherwise Gatsby does not pick up the new data which can be confusing.

  #### Gatsby can get confused some times.
  The plugin used to pull data from Wagtail into Gatsby likes to cache the graphql 'schema types'. As such, when you add more query
  fields to the api, gatsby doesn't know the new types exist and will compain about graphql query syntax. This will error like so:

  ```
  error GraphQL Error Unknown field `isCalledDave` on type `[Wagtail_PersonPageObjectType]`

  file: /Users/nathanhorrigan/Code/tbx-frontend/src/templates/team/index.js

   1 |
   2 |   query {
   3 |     wagtail {
   4 |       personIndexPage {
   5 |         strapline
   6 |       }
   7 |       personPages {
   8 |         firstName
   9 |         lastName
> 10 |         isCalledDave
     |         ^
  11 |         slug
  12 |         role
  13 |         isSenior
  14 |         image {
  15 |           ...largeIconImage
  16 |         }
  17 |       }
  18 |     }
  19 |   }
  20 |
  ```

  If you are sure that gatsby is confused and that the field `isCalledDave` does exist then you just need to refresh your cache
  with a simple `rm -r ./.cache/*` command.

  ## Pattern library

  The site uses Storybook which can be started locally by running `npm run storybook`. Note: this is currently failing.

  ## Site management

  The site is hosted on Netlify, and you can get access to the build using the torchbox@gmail.com email - password in pwamn. Tom Dyson and Helen Chapman also have access.

  The gatsby site is rebuilt every time a change is published on the headless CMS, and every time that changes are pushed to the `master` branch.

  If a build fails for any reason, then Netlify will continue to serve up the older version.

  There is a staging site at https://torchbox.staging.torchbox.com/. This pulls in data from the wagtail staging site at https://cms.torchbox.staging.torchbox.com/graphql/ .

  ## Deployment

  Pushing changes to the `staging` branch will automatically trigger a deployment to https://torchbox.staging.torchbox.com/

  Pushing changes to the `master` branch will automatically trigger a deployment to the production site.

  ## Redirects

  There are some redirects set up on the live site which set the home page according to your location. On the staging site and on a local build these will not be present, so on these builds the root of the site (or clicking on the torcbox logo in the main navigation) will give a 404.
  
 ## GraphQL queries are repeated
 
 Note that all GraphQL queries are repeated - for the front-end build and for the preview for the wagtail CMS admin area. If you make a change to a query, please make sure it is made for both queries.


