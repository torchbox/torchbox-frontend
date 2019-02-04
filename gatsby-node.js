const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post/index.js`)
  const caseStudyTemplate = path.resolve(`src/templates/case-study/index.js`)
  const personTemplate = path.resolve(`src/templates/person/index.js`)

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
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create all blog post pages.
    result.data.wagtail.blogPosts.map(({slug}) => {
      createPage({
        path: `/blogs/${slug}`,
        component: blogPostTemplate,
        context: { slug },
      })
    })

    // Create all case-study pages.
    result.data.wagtail.caseStudies.map(({slug}) => {
      createPage({
        path: `/work/${slug}`,
        component: caseStudyTemplate,
        context: { slug },
      })
    })

    // Create all person pages
    result.data.wagtail.personPages.map(({slug}) => {
      createPage({
        path: `/team/${slug}`,
        component: personTemplate,
        context: { slug },
      })
    })
  })
}
