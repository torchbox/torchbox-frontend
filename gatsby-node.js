const path = require('path')

function getRoutes(slugs, countryCode) {
  const blogPostTemplate = path.resolve(`src/templates/blog-post/index.js`)
  const caseStudyTemplate = path.resolve(`src/templates/case-study/index.js`)
  const personTemplate = path.resolve(`src/templates/person/index.js`)
  const serviceTemplate = path.resolve(`src/templates/service/index.js`)
  const subServiceTemplate = path.resolve(`src/templates/sub-service/index.js`)
  const standardTemplate = path.resolve(`src/templates/standard/index.js`)

  let routes = []

  // Culture and Jobs
  routes.push({
    component: path.resolve('src/templates/culture/index.js'),
    path: '/culture-and-jobs',
    context: {
      slug: 'culture-and-jobs',
      countryCode,
    },
  });

  // Listings
  routes.push({ component: path.resolve('src/templates/blogs/index.js'), path: '/blog' })
  routes.push({ component: path.resolve('src/templates/case-studies/index.js'), path: '/work' })
  routes.push({ component: path.resolve('src/templates/team/index.js'), path: '/team' })
  routes.push({ component: path.resolve('src/templates/jobs/index.js'), path: '/jobs' })

  // Blog posts
  for (let { slug } of slugs.blogPosts) {
    routes.push({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: { slug, countryCode },
    })
  }

  // Case studies
  for (let { slug } of slugs.caseStudies) {
    routes.push({
      path: `/work/${slug}`,
      component: caseStudyTemplate,
      context: { slug, countryCode },
    })
  }

  // People
  for (let { slug } of slugs.personPages) {
    routes.push({
      path: `/team/${slug}`,
      component: personTemplate,
      context: { slug, countryCode },
    })
  }

  // Services
  for (let { slug: serviceSlug, subServicePages } of slugs.servicePages) {
    routes.push({
      component: serviceTemplate,
      path: `/${serviceSlug}`,
      context: {
        slug: serviceSlug,
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
    })

    // Sub-services
    for (let { slug: subServiceslug } of subServicePages) {
      routes.push({
        path: `/${serviceSlug}/${subServiceslug}`,
        component: subServiceTemplate,
        context: {
          slug: subServiceslug,
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
      })
    }
  }

  // Standard pages
  for (let { slug } of slugs.standardPages) {
    routes.push({
      path: `/${slug}`,
      component: standardTemplate,
      context: {
        slug,
        countryCode,
      },
    })
  }

  return routes
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

          subServicePages {
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

    const countryCode = process.env.GATSBY_COUNTRY_CODE || null;
    getRoutes(result.data.wagtail, countryCode).map(page => createPage(page))
  })
}
