import React from 'react'

import { graphql } from "gatsby"
import Layout from '../../components/layout'
import BlogListingPage from './blog-listing'

export default ({ data }) => {
  return (
    <Layout>
      <BlogListingPage
        title="Our thinking [about all things digital]."
        blogs={data.wagtail.blogPosts} />
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
