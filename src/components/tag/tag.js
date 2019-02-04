import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import styles from './tag.module.scss'

const Tag = ({ label, className, onClick, href }) => (
  <Link
    className={[styles.tag, className].join(' ')}
    onClick={onClick}
    to={href}
  >
    {label}
  </Link>
)

Tag.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
}

export default Tag
