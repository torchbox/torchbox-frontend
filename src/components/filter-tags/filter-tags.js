// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import Tag from '../tag'
// Styles
import styles from './filter-tags.module.scss'

const FilterTags = ({ tags, onChange = () => null, activeTag, className }) => (
  <div className={[styles.filter, className].join(' ')}>
    {tags.map((tag, index) => (
      <Tag
        key={`filter-tag-${index}`}
        className={
          activeTag === index ? styles.filterTagActive : styles.filterTag
        }
        onClick={() => onChange(tag, index)}
        href={tag.href || '#'}
        label={tag.label || tag}
      />
    ))}
  </div>
)

FilterTags.propTypes = {
  tags: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  activeTag: PropTypes.number,
}

FilterTags.defaultProps = {
  className: '',
}

export default FilterTags
