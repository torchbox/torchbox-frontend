import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './teaser-block.module.scss'

const TeaserLink = ({title, description, href, className}) => (
  <Link to={href} className={[styles.teaserBlockItem, className].join(' ')}>
    <h1 className={styles.teaserBlockItemTitle}>{title}</h1>
    <span className={styles.teaserBlockItemDesc}>
      {description}
    </span>
  </Link>
)

TeaserLink.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
}

export default TeaserLink
