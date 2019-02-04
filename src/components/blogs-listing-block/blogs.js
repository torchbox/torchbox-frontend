import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './blogs.module.scss'
import Avatar from '../avatar'
import BlogLink from '../blog-link'

const Blogs = ({
  blogs,
  className,
  sectionTitle,
  listingUrl,
  showFeatured = true,
}) => {
  const featuredPost = blogs[0]
  return (
    <div className={[styles.block, className].join(' ')}>
      <div className={styles.blockContent}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        {showFeatured ? (
          <section className={styles.blockIntro}>
            <BlogLink
              featured={true}
              href={featuredPost.href}
              title={featuredPost.title}
              description={featuredPost.description}
              authorAvatar={featuredPost.authorAvatar}
              authorName={featuredPost.authorName}
              authorRole={featuredPost.authorRole}
            />
          </section>
        ) : null}

        <div className={styles.blockBlogList}>
          {blogs.slice(showFeatured ? 1 : 0).map(blog => (
            <BlogLink
              href={blog.href}
              title={blog.title}
              authorAvatar={blog.authorAvatar}
              authorName={blog.authorName}
              authorRole={blog.authorRole}
            />
          ))}
        </div>

        <div className={styles.seeMore}>
          <Link to={listingUrl}>See more blogs</Link>
        </div>
      </div>
    </div>
  )
}

Blogs.propTypes = {
  blogs: PropTypes.array,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired,
}

Blogs.defaultProps = {
  className: '',
  blogs: [],
  sectionTitle: 'Thinking',
}

export default Blogs
