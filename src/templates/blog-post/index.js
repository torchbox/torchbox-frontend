import React from 'react'

import { graphql } from 'gatsby'
import BlogPostPage from './blog-post'
import Layout from '../../components/layout'
import { authorDetails, postTags } from '../../utils/selectors'
import { blogsUrl } from '../../utils/urls'

export default ({ data }) => {
  const page = data.wagtail.blogPosts[0]
  return (
    <Layout>
      <BlogPostPage
        title={page.title}
        streamfield={page.body}
        author={authorDetails(page.authors)}
        datePublished={page.date}
        tags={postTags(page.tags, blogsUrl('#filter='))}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      blogPosts(slug: $slug) {
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
            image {
              ...iconImage
            }
          }
          role
        }
        body
      }
    }
  }
`
