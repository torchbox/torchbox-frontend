import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'

import styles from './filter-tags.module.scss'

const FilterTags = ({ tags, onChange, activeTag, className }) => (
  <div className={[styles.filter, className].join(' ')}>
    {tags.map((tag, index) => (
      <Tag
        className={activeTag === index ? styles.filterTagActive : styles.filterTag}
        onClick={() => onChange(tag, index)}
        href={tag.href || '#'}
        label={tag.label || tag}>
      </Tag>
    ))}
  </div>
)

FilterTags.propTypes = {
  tags: PropTypes.string,
  className: PropTypes.string,
}

FilterTags.defaultProps = {
  className: '',
}

export default FilterTags
