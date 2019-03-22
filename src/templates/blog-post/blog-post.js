// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import AuthorBlock from '@components/author-block'
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import Blogs from '@components/blogs-listing-block'
// Utilities
import { blogsUrl } from '@utils/urls'
// Styles
import styles from './blog-post.module.scss'

const BlogPostPage = ({
  title,
  author,
  datePublished,
  readTime,
  tags,
  streamfield,
  extraBlogPosts,
  contact,
  contactReasons,
}) => (
  <div className={styles.page}>
    <TitleBlock className={styles.pageTitle} title={title} innerPage={true} />
    <AuthorBlock
      className={styles.pageAuthor}
      author={author}
      datePublished={datePublished}
      readTime={readTime}
      tags={tags}
    />
    <StreamfieldBlock
      className={styles.pageStreamfield}
      streamfield={streamfield}
    />
    <AuthorBlock className={styles.pageAuthor} author={author} tags={tags} />
    {extraBlogPosts ? (
      <Blogs
        className={styles.pageShowcase}
        sectionTitle="More of our thinking"
        blogs={extraBlogPosts}
        showFeatured={false}
        listingUrl={blogsUrl()}
      />
    ) : null}
    <Contact className={styles.pageContact} {...contact} {...contactReasons} />
  </div>
)

BlogPostPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  extraBlogPosts: PropTypes.array,
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
}

BlogPostPage.defaultProps = {
  tags: [],
  blogs: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
  contact: {},
  extraBlogPosts: [],
}

export default BlogPostPage
