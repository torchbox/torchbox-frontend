// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import BlogListingPage from './blog-listing'
import Layout from '@components/layout'

const BlogsListingContainer = ({ data }) => {
  return (
    <Layout seoTitle="Blogs: our thinking about all things digital">
      <BlogListingPage
        title="Our thinking [about all things digital]."
        blogs={data.wagtail.blogPosts}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagtail {
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
    }
  }
`

BlogsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default BlogsListingContainer
