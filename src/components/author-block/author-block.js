import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import styles from './author-block.module.scss'
import Avatar from '../avatar/avatar'
import Tag from '../tag/tag'

const AuthorBlock = ({ author, datePublished, tags, readTime, className }) => (
  <div className={[styles.authorBlock, className].join(' ')}>
    <div className={styles.authorBlockContainer}>
      <Avatar src={author.avatar} containerClassName={styles.authorBlockImage}/>
      <div className={styles.authorBlockDetails}>
        <span className={styles.authorBlockName}>{author.name}</span>
        <p className={styles.authorBlockMeta}>
          <span className={styles.authorBlockMetaRole}>{author.role}</span>
          {datePublished ? <span className={styles.authorBlockMetaDate}>{dayjs(datePublished).format(`DD MMM 'YY`)}</span> : null }
          {readTime ? <span className={styles.authorBlockMetaReadTime}>{readTime} min read</span> : null }
        </p>
        {tags.length ? (
          <div className={styles.authorBlockTags}>
            {tags.map(tag => (
              <Tag label={tag.label} href={tag.href} />
            ))}
          </div>
        ) : null }
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
  author: {},
}

export default AuthorBlock
