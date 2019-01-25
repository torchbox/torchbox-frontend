import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'

import styles from './filter-tags.module.scss'

const FilterTags = ({ options, onChange, activeOption, className }) => (
  <div className={[styles.filter, className].join('')}>
    {options.map((option, index) => (
      <Tag
        className={activeOption === index ? styles.filterTagActive : styles.filterTag}
        onClick={() => onChange(option, index)}
        label={option.label || option}>
      </Tag>
    ))}
  </div>
)

FilterTags.propTypes = {
  options: PropTypes.string,
  className: PropTypes.string,
}

FilterTags.defaultProps = {
  className: '',
}

export default FilterTags
