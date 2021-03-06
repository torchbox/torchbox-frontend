// Vendor Modules
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// Styles
import styles from './parent-page-link.module.scss'

const ParentPageLink = ({ label, href, className }) => (
  <span className={[styles.parentLink, className].join(' ')}>
    <Link to={href}>{label}</Link>
  </span>
)

ParentPageLink.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}

ParentPageLink.defaultProps = {
  className: '',
  label: '',
  href: '#',
}

export default ParentPageLink
