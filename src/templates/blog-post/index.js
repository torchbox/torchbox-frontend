import React from 'react'

import { graphql } from 'gatsby'
import BlogPostPage from './blog-post'
import Layout from '../../components/layout'
import { authorDetails, postTags } from '../../utils/selectors'
import { blogsUrl } from '../../utils/urls'

export default ({ data }) => {
  const page = data.wagtail.blogPosts[0]
  const extraBlogPosts = data.wagtail.extraBlogPosts
  return (
    <Layout>
      <BlogPostPage
        title={page.title}
        streamfield={page.body}
        author={authorDetails(page.authors)}
        datePublished={page.date}
        tags={postTags(page.tags, blogsUrl('#filter='))}
        extraPosts={extraBlogPosts}
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
            role
            slug
            image {
              ...iconImage
            }
          }
        }
        body
        contact {
          ...contactSnippet
        }
      }

      extraBlogPosts: blogPosts(limit: 2) {
        title
        date
        tags: relatedServices {
          name
          slug
        }
        authors {
          name
          personPage {
            role
            slug
            image {
              ...iconImage
            }
          }
        }
        body
        contact {
          ...contactSnippet
        }
      }
    }
  }
`
