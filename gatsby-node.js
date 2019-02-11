const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post/index.js`)
  const caseStudyTemplate = path.resolve(`src/templates/case-study/index.js`)
  const personTemplate = path.resolve(`src/templates/person/index.js`)
  const serviceTemplate = path.resolve(`src/templates/service/index.js`)
  const standardTemplate = path.resolve(`src/templates/standard/index.js`)

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
        subServicePages {
          slug
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

    [
      // Service (Main) Pages
      {
        component: serviceTemplate,
        path: '/',
        context: {
          slug: 'digital-products',
          blocks: [
            'hero-block',
            'help-block',
            'testimonials-block',
            'process-block',
            'case-studies-block',
            'blogs-block'
          ]
        },
      },

      {
        component: serviceTemplate,
        path: '/wagtail/',
        context: {
          slug: 'wagtail',
          blocks: [
            'hero-block',
            'help-block',
            'testimonials-block',
            'process-block',
            'case-studies-block',
            'blogs-block'
          ]
        },
      },

      {
        component: serviceTemplate,
        path: '/digital-marketing/',
        context: {
          slug: 'digital-marketing',
          blocks: [
            'hero-block',
            'help-block',
            'testimonials-block',
            'case-studies-block',
            'blogs-block'
          ]
        },
      },

      {
        component: path.resolve('src/templates/culture/index.js'),
        path: '/culture-and-jobs/',
        context: {
          slug: 'culture-and-jobs'
        },
      },

      // Listing Pages
      { component: path.resolve('src/templates/blogs/index.js'), path: '/blogs/' },
      { component: path.resolve('src/templates/case-studies/index.js'), path: '/work/' },
      { component: path.resolve('src/templates/team/index.js'), path: '/team/' },
      { component: path.resolve('src/templates/jobs/index.js'), path: '/jobs/' },

      // Single Page-types
      ...result.data.wagtail.blogPosts.map(({slug}) => ({
        path: `/blogs/${slug}`,
        component: blogPostTemplate,
        context: { slug },
      })),

      ...result.data.wagtail.caseStudies.map(({slug}) => ({
        path: `/work/${slug}`,
        component: caseStudyTemplate,
        context: { slug },
      })),

      ...result.data.wagtail.personPages.map(({slug}) => ({
        path: `/team/${slug}`,
        component: personTemplate,
        context: { slug },
      })),

      ...result.data.wagtail.subServicePages.map(({slug}) => ({
        path: `/service/${slug}`,
        component: serviceTemplate,
        context: {
          slug,
          isSubServicePage: true,
          blocks: [
            'hero-block',
            'help-block',
            'process-block',
            'testimonials-block',
            'case-studies-block',
            'blogs-block'
          ]
        },
      })),

      ...result.data.wagtail.standardPages.map(({slug}) => ({
        path: slug,
        component: standardTemplate,
        context: {
          slug,
        },
      }))

    ].map(page => {
      createPage({ ...page })
    })

  })
}
