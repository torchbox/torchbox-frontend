// Vendor Modules
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// Styles
import styles from './footer.module.scss'

const Footer = ({ offices, links, className }) => (
  <div className={[styles.footer, className].join(' ')} role="contentinfo">
    <div className={styles.footerContent}>
      <ul className={styles.footerAddressList}>
        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>{offices.oxfordAddressTitle}</h2>
          <p className={styles.footerAddressContent} dangerouslySetInnerHTML={{__html: offices.oxfordAddress}} />
        </li>

        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>{offices.bristolAddressTitle}</h2>
          <p className={styles.footerAddressContent} dangerouslySetInnerHTML={{__html: offices.bristolAddress}} />
        </li>

        <li className={styles.footerAddress}>
        <h2 className={styles.footerAddressTitle}>{offices.cambridgeAddressTitle}</h2>
          <p className={styles.footerAddressContent} dangerouslySetInnerHTML={{__html: offices.cambridgeAddress}} />
        </li>

        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>{offices.usAddressTitle}</h2>
          <p className={styles.footerAddressContent} dangerouslySetInnerHTML={{__html: offices.usAddress}} />
        </li>
      </ul>

      <div>
        <span className={styles.footerCopyright}>© Torchbox {new Date().getFullYear()}</span>
        {links.map((link, index) => (
          <Link
            key={`footer-link-${index}`}
            className={styles.footerLink}
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    <img
      className={styles.footerImage}
      src={require('@images/man-coffee.svg').default}
      alt=""
    />
  </div>
)

Footer.propTypes = {
  links: PropTypes.array,
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
  links: [],
}

export default Footer
