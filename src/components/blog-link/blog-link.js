// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import dayjs from 'dayjs'
// Components
import Avatar from '@components/avatar'
// Styles
import styles from './blog-link.module.scss'

const BlogLink = ({
  href,
  title,
  featured,
  description,
  className,
  authorAvatar,
  authorName,
  authorRole,
  datePublished,
}) => (
  <Link
    className={[
      featured ? styles.blogLinkFeatured : styles.blogLink,
      className,
    ].join(' ')}
    to={href}
  >
    <h3 className={styles.blogLinkTitle}>{title}</h3>
    {description && featured ? (
      <p className={styles.blogLinkDesc}>{description}</p>
    ) : null}
    <div className={styles.blogLinkMeta}>
      <Avatar src={authorAvatar} containerClassName={styles.blogLinkImage} alt={authorName} />
      <div className={styles.blogLinkAuthor}>
        <span className={styles.blogLinkAuthorName}>{authorName}</span>
        <span className={styles.blogLinkAuthorRole}>
          {authorRole}
          {datePublished ? (
            <span className={styles.blogLinkAuthorDate}>
              {dayjs(datePublished).format(`DD MMM 'YY`)}
            </span>
          ) : null}
        </span>
      </div>
    </div>
  </Link>
)

BlogLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  featured: PropTypes.bool,
  description: PropTypes.string,
  className: PropTypes.string,
  authorAvatar: PropTypes.string,
  authorName: PropTypes.string,
  authorRole: PropTypes.string,
  datePublished: PropTypes.string,
}

BlogLink.defaultProps = {
  className: '',
}

export default BlogLink
