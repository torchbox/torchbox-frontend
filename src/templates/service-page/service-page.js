import React from 'react'
import PropTypes from 'prop-types'

import styles from './service-page.module.scss'
import TitleBlock from '../../components/title-block'
import AuthorBlock from '../../components/author-block'
import StreamfieldBlock from '../../components/streamfield-block'
import Contact from '../../components/contact-detailed'
import Blogs from '../../components/blogs-listing-block'
import { blogsUrl } from '../../utils/urls'

const BlogPostPage = ({
  title,
  author,
  datePublished,
  readTime,
  tags,
  streamfield,
  blogs
}) => (
  <div className={styles.page}>
    <TitleBlock className={styles.pageTitle} title={title} />
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
    <Blogs
      className={styles.pageShowcase}
      sectionTitle="More of our thinking"
      blogs={blogs}
      showFeatured={false}
      listingUrl={blogsUrl()}
    />
    <Contact className={styles.pageContact} />
  </div>
)

BlogPostPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  blogs: PropTypes.array,
}

BlogPostPage.defaultProps = {
  tags: [],
  blogs: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default BlogPostPage
