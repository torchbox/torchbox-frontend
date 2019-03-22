const path = require('path')

function getRoutes(slugs, countryCode) {
  const blogPostTemplate = path.resolve(`src/templates/blog-post/index.js`)
  const caseStudyTemplate = path.resolve(`src/templates/case-study/index.js`)
  const personTemplate = path.resolve(`src/templates/person/index.js`)
  const serviceTemplate = path.resolve(`src/templates/service/index.js`)
  const subServiceTemplate = path.resolve(`src/templates/sub-service/index.js`)
  const standardTemplate = path.resolve(`src/templates/standard/index.js`)

  return [
    {
      component: path.resolve('src/templates/culture/index.js'),
      path: '/culture-and-jobs',
      context: {
        slug: 'culture-and-jobs',
        countryCode,
      },
    },

    // Listing Pages
    { component: path.resolve('src/templates/blogs/index.js'), path: '/blogs' },
    { component: path.resolve('src/templates/case-studies/index.js'), path: '/work' },
    { component: path.resolve('src/templates/team/index.js'), path: '/team' },
    { component: path.resolve('src/templates/jobs/index.js'), path: '/jobs' },

    // Single Page-types
    ...slugs.blogPosts.map(({ slug }) => ({
      path: `/blogs/${slug}`,
      component: blogPostTemplate,
      context: { slug, countryCode },
    })),

    ...slugs.caseStudies.map(({ slug }) => ({
      path: `/work/${slug}`,
      component: caseStudyTemplate,
      context: { slug, countryCode },
    })),

    ...slugs.personPages.map(({ slug }) => ({
      path: `/team/${slug}`,
      component: personTemplate,
      context: { slug, countryCode },
    })),

    ...slugs.servicePages.map(({ slug, service }) => {
      if (service) {
        if (service.slug) {
          return {
            component: serviceTemplate,
            path: service.slug,
            context: {
              slug: service.slug,
              blocks: [
                'hero-block',
                'help-block',
                'testimonials-block',
                'process-block',
                'case-studies-block',
                'blogs-block',
                'contact-detailed',
              ],
              countryCode,
            },
          }
        }
      }
      return null
    }),

    ...slugs.subServicePages.map(({ slug, parentService }) => {
      if (parentService) {
        if (parentService.slug) {
          return {
            path: `/${parentService.slug}/${slug}`,
            component: subServiceTemplate,
            context: {
              slug,
              isSubServicePage: true,
              blocks: [
                'hero-block',
                'help-block',
                'process-block',
                'testimonials-block',
                'case-studies-block',
                'blogs-block',
                'contact-detailed',
              ],
              countryCode,
            },
          }
        }
      }
      return null
    }),

    ...slugs.standardPages.map(({ slug }) => ({
      path: `/${slug}`,
      component: standardTemplate,
      context: {
        slug,
        countryCode,
      },
    })),
  ].filter(page => page !== null)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      wagtail {
        blogPosts {
          slug
        }
        caseStudies {
          slug
        }
        personPages {
          slug
        }
        servicePages {
          slug
          service {
            slug
          }
        }
        subServicePages {
          slug
          parentService {
            slug
          }
        }
        standardPages {
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    if (process.env.GATSBY_ENVIRONMENT === 'netlify') {
      // On Netlify, render the whole site for each region
      // there is configuration in the '_redirects' file that tells Netlify which version should be served
      // Note: There are only minor changes between the different regions. For example, which logos to
      // display on service pages and tweaks to the "related pages" query. There should be no difference in
      // content or language.
      [
        // Render whole site for USA
        ...getRoutes(result.data.wagtail, 'US').map(route => {
          route.path = '/us' + route.path
          return route
        }),

        // Render whole site for rest of world
        ...getRoutes(result.data.wagtail, null).map(route => {
          route.path = '/row' + route.path
          return route
        })
      ].map(page => createPage(page))
    } else {
      // In development mode, we want to avoid prefixing the URLs so the site works locally.
      // Note: if you want to test the US site, change the second parameter of getRoutes to 'US'
      getRoutes(result.data.wagtail, null).map(page => createPage(page))
    }
  })
}
