import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import Layout from '../../components/layout'
import BlogListingPage from './blog-listing'

export default () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query BlogsQuery {
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
                  role
                  personPage {
                    slug
                    image {
                      src
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return <BlogListingPage
            title="Our thinking [about all things digital]."
            blogs={data.wagtail.blogPosts} />
        }}
      />
    </Layout>
  )
}
