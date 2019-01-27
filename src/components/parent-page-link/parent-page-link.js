import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './parent-page-link.module.scss'

const ParentPageLink = ({ label, href, className }) => (
  <span className={[styles.parentLink].join(' ')}>
    <Link to={'#'}>Digital marketing</Link>
  </span>
)

ParentPageLink.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}

ParentPageLink.defaultProps = {
  className: '',
  href: '#',
}

export default ParentPageLink
