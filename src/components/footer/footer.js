import React from 'react'
import PropTypes from 'prop-types'

import styles from './footer.scss'

const Footer = ({ links, className }) => (
  <div className={[styles.footer, className].join(' ')}>
    <div className={styles.footerContent}>
      <span className={styles.footerCopyright}>© Torchbox 2018</span>
      {links.map(link => (
        <a className={styles.footerLink} href={link.href}>{link.label}</a>
      ))}
    </div>
  </div>
)

Footer.propTypes = {
  links: PropTypes.array,
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
  links: []
}

export default Footer
