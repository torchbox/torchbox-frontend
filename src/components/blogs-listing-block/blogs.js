import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './blogs.module.scss'
import Avatar from '../avatar/avatar'

const Blogs = ({ blogs, className }) => (
  <div className={[styles.block, className].join(' ')}>
    <div className={styles.blockContent}>

      <section className={styles.blockIntro}>
        <h1>Our thinking</h1>
        <div className={styles.blockIntroOpinion}>
          <h1 className={styles.blockIntroOpinionTitle}>'Shortcut to the solution'</h1>
          <p className={styles.blockIntroOpinionText}>Today's non profits are full of great people suffocated by
            corporate structures that feel impossible to work around. We need to stop focusing on the structural
            problem. And, instead, fast forward to the solution, the new ‘sprint’ based way of working that everyone is
            hungry for. Design Sprints</p>
        </div>
      </section>


      <div className={styles.blockBlogList}>
        {blogs.map(blog => (
          <Link className={styles.blockBlogLink}>

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


    </div>
  </div>
)

Blogs.propTypes = {
  blogs: PropTypes.array,
  className: PropTypes.string,
}

Blogs.defaultProps = {
  className: '',
  blogs: []
}

export default Blogs
