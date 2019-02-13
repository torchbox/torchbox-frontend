import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { Link } from 'gatsby'

import styles from './author-block.module.scss'
import Avatar from '../avatar/avatar'
import Tag from '../tag/tag'

const AuthorBlock = ({ author, datePublished, tags, readTime, className }) => (
  <div className={[styles.authorBlock, className].join(' ')}>
    <div className={styles.authorBlockContainer}>
      <Avatar
        src={author.avatar || require('../../images/default-avatar.png')}
        containerClassName={styles.authorBlockImage}
      />
      <div className={styles.authorBlockDetails}>
        <Link to={`/team/${author.slug}`} className={styles.authorBlockName}>
          {author.name || ''}
        </Link>
        <p className={styles.authorBlockMeta}>
          <span className={styles.authorBlockMetaRole}>
            {author.role || 'Past Employee'}
          </span>
          {datePublished ? (
            <span className={styles.authorBlockMetaDate}>
              {dayjs(datePublished).format(`DD MMM 'YY`)}
            </span>
          ) : null}
          {readTime ? (
            <span className={styles.authorBlockMetaReadTime}>
              {readTime} min read
            </span>
          ) : null}
        </p>
        {tags.length ? (
          <div className={styles.authorBlockTags}>
            {tags.map(tag => (
              <Tag label={tag.label} href={tag.href} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </div>
)

AuthorBlock.propTypes = {
  className: PropTypes.string,
  author: PropTypes.object.isRequired,
  datePublished: PropTypes.string,
  tags: PropTypes.array,
  readTime: PropTypes.number,
}

AuthorBlock.defaultProps = {
  author: {
    avatar: require('../../images/default-avatar.png'),
  },
}

export default AuthorBlock
