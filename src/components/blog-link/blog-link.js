import React from 'react'
import PropTypes from 'prop-types'

import styles from './blog-link.module.scss'
import Avatar from '../avatar/avatar'
import { Link } from 'gatsby'
import dayjs from 'dayjs'

const BlogLink = ({ href, title, className, authorAvatar, authorName, authorRole, datePublished }) => (
  <Link className={[styles.blogLink, className].join(' ')} to={href}>
    <h3 className={styles.blogLinkTitle}>{title}</h3>
    <div className={styles.blogLinkMeta}>
      <Avatar src={authorAvatar} containerClassName={styles.blogLinkImage} />
      <div className={styles.blogLinkAuthor}>
        <span className={styles.blogLinkAuthorName}>{authorName}</span>
        <span className={styles.blogLinkAuthorRole}>{authorRole}
          {datePublished ? <span className={styles.blogLinkAuthorDate}>{dayjs(datePublished).format(`DD MMM 'YY`)}</span> : null }
        </span>
      </div>
    </div>
  </Link>
)

BlogLink.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

BlogLink.defaultProps = {
  className: '',
}

export default BlogLink
