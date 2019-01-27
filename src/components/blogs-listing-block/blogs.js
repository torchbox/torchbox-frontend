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
            <Link className={styles.blockBlogLink} to={featuredPost.href}>
              <h1 className={styles.blockBlogLinkBigTitle}>
                {featuredPost.title}
              </h1>
              <p className={styles.blockBlogLinkDesc}>
                {featuredPost.description}
              </p>
              <div className={styles.blockBlogLinkMeta}>
                <Avatar
                  src={featuredPost.authorAvatar}
                  containerClassName={styles.blockBlogLinkImage}
                />
                <div className={styles.blockBlogLinkAuthor}>
                  <span className={styles.blockBlogLinkAuthorName}>
                    {featuredPost.authorName}
                  </span>
                  <span className={styles.blockBlogLinkAuthorRole}>
                    {featuredPost.authorRole}
                  </span>
                </div>
              </div>
            </Link>
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
