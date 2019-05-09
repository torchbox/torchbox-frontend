// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import BlogListingPage from './blog-listing'
import Layout from '@components/layout'

const BlogsListingContainer = ({ data }) => {
  return (
    <Layout
      seoTitle={data.wagtail.blogIndexPage.pageTitle}
      seoDesc={data.wagtail.blogIndexPage.searchDescription}
    >
      <BlogListingPage
        title={data.wagtail.blogIndexPage.title}
        blogs={data.wagtail.blogPosts}
        contact={data.wagtail.contact}
        contactReasons={data.wagtail.contactReasons}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagtail {
      blogIndexPage {
        pageTitle
        searchDescription
        title
      }
      blogPosts {
        slug
        title
        date
        contact {
          ...contactSnippet
        }
        tags: relatedServices {
          name
          slug
        }
        authors {
          name
          personPage {
            slug
            role
            image {
              ...iconImage
            }
          }
        }
      }
      contact {
        ...contactSnippet
      }
      contactReasons {
        ...contactReasonsSnippet
      }
    }
  }
`

export const previewQuery = `
  query($previewToken: String) {
    blogIndexPage(previewToken: $previewToken) {
      pageTitle
      searchDescription
      title
    }
    blogPosts {
      slug
      title
      date
      contact {
        ...contactSnippet
      }
      contactReasons {
        ...contactReasonsSnippet
      }
      tags: relatedServices {
        name
        slug
      }
      authors {
        name
        personPage {
          slug
          role
          image {
            ...iconImage
          }
        }
      }
    }
    contact {
      ...contactSnippet
    }
    contactReasons {
      ...contactReasonsSnippet
    }
  }
`

BlogsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default BlogsListingContainer
