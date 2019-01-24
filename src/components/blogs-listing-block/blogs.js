import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './blogs.module.scss'
import Avatar from '../avatar/avatar'

const Blogs = ({ blogs, className, sectionTitle, listingUrl }) => {
  const featuredPost = blogs[0]
  return (
    <div className={[styles.block, className].join(' ')}>

      <div className={styles.blockContent}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        <section className={styles.blockIntro}>
          <Link className={styles.blockBlogLink} to={featuredPost.href}>
            <h1 className={styles.blockBlogLinkBigTitle}>{featuredPost.title}</h1>
            <p className={styles.blockBlogLinkDesc}>{featuredPost.description}</p>
            <div className={styles.blockBlogLinkMeta}>
              <Avatar src={featuredPost.authorAvatar} containerClassName={styles.blockBlogLinkImage} />
              <div className={styles.blockBlogLinkAuthor}>
                <span className={styles.blockBlogLinkAuthorName}>{featuredPost.authorName}</span>
                <span className={styles.blockBlogLinkAuthorRole}>{featuredPost.authorRole}</span>
              </div>
            </div>
          </Link>
        </section>


        <div className={styles.blockBlogList}>
          {blogs.slice(1).map(blog => (
            <Link className={styles.blockBlogLink} to={blog.href}>
              <h3 className={styles.blockBlogLinkTitle}>{blog.title}</h3>
              <div className={styles.blockBlogLinkMeta}>
                <Avatar src={blog.authorAvatar} containerClassName={styles.blockBlogLinkImage} />
                <div className={styles.blockBlogLinkAuthor}>
                  <span className={styles.blockBlogLinkAuthorName}>{blog.authorName}</span>
                  <span className={styles.blockBlogLinkAuthorRole}>{blog.authorRole}</span>
                </div>
              </div>
            </Link>
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
  listingUrl: PropTypes.string.isRequired
}

Blogs.defaultProps = {
  className: '',
  blogs: [],
  sectionTitle: 'Thinking',
}

export default Blogs
