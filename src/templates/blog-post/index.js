// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import BlogPostPage from './blog-post'
// Utilities
import { blogsUrl } from '@utils/urls'
import {
  blogListing,
  authorDetails,
  postTags,
  readTime,
} from '@utils/selectors'

const BlogPostContainer = ({ pageContext, data }) => {
  const page = data.wagtail.blogPosts[0]
  const extraBlogPosts = data.wagtail.extraBlogPosts
  return (
    <Layout seoTitle={page.pageTitle}>
      <BlogPostPage
        title={page.title}
        streamfield={page.body}
        author={authorDetails(page.authors)}
        datePublished={page.date}
        readTime={readTime(page.bodyWordCount) || 0}
        tags={postTags(page.tags, blogsUrl('#filter='))}
        extraBlogPosts={extraBlogPosts.filter(b => b.slug !== pageContext.slug).slice(0, 2).map(blogListing)}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      blogPosts(slug: $slug) {
        title
        pageTitle
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
        bodyWordCount
        contact {
          ...contactSnippet
        }
      }

      extraBlogPosts: blogPosts(limit: 3) {
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

BlogPostContainer.propTypes = {
  data: PropTypes.object,
}

export default BlogPostContainer
