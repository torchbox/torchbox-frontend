<h1 align="center">
  Torchbox.com Gatsby Frontend
</h1>


This is the frontend component of the new torchbox.com site. It requires you to have the [backend graphql component](https://github.com/torchbox/wagtail-torchbox/tree/new) running locally or on the server.

## 🚀 Quick start

1.  **Download & Install.**

   `git clone https://github.com/torchbox/torchbox-frontend`
   `npm install`

2.  **Configure.**

    If you don't want to run the backend component locally then you will have to change the `http://localhost:8000/graphql/` string in your `gatsby-config.json`. To use the live site CMS uses `https://cms.torchbox.com`. Obviously don't edit the live CMS data to test your changes though!

    Note that if you change the endpoint in `gatsby-config.json` you need to restart gatsby to pick up the changes. A restart is also often needed to pick up changes published in the CMS.


3.  **Start Developing!**

    You can run dev mode by executing the following command:
    
    `yarn start // Runs dev server on port 800*`

    You can also build and preview production code using:
    
    `yarn build // Builds prod code`
    `yarn serve // Serves prod code on port 9000`

## 🧐 Useful things to know:
  #### Prettier & Eslint are both used.
  Please make your code pretty and eslint to make sure you aren't shipping baddly 
  typed components. Eslint will also complain about the order of the imports. Please keep them tidy :) (If you want to know more about the import ordering then you can look in the eslint config file).

  #### Gatsby builds will break if Wagtail returns an error.
  If you have bad request or your code doesn't handle null values then the build will fail (remember building a gatsby site runs all 
  your react code locally (or in CI) to produce loads of HTML files).

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

  The site uses Storybook which can be started locally by running `yarn storybook`. Note: this is currently failing.

  ## Site management

  The site is hosted on Netlify, and you can get access to the build using the torchbox@gmail.com email - password in pwamn.

  The gatsby site is rebuilt every time a change is published on the headless CMS, and every time that changes are pushed to the `develop` branch.

  If a build fails for any reason, then Netlify will continue to serve up the older version.


  ## Deployment

  Pre-launch: pushing changes to the `develop` branch will automatically trigger a redeploy to https://tbx-staging.netlify.com/

  Post-launch: we will have a staging and production version of the gatsby site, linked to `staging` and `master` branches.


