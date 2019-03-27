// Vendor Modules
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// Styles
import styles from './footer.module.scss'

const Footer = ({ links, className }) => (
  <div className={[styles.footer, className].join(' ')} role="contentinfo">
    <div className={styles.footerContent}>
      <ul className={styles.footerAddressList}>
        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>Glorious Oxfordshire</h2>
          <p>
            Unit 9<br />
            Southill Business Park<br />
            Charlbury<br />
            OX7 3EW<br />
            UK
          </p>
        </li>

        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>Vibrant Bristol</h2>
          <p>
            3rd Floor
            <br />
            15 Colston Street
            <br />
            Bristol
            <br />
            BS1 5AP
            <br />
            UK
          </p>
        </li>

        <li className={styles.footerAddress}>
          <h2 className={styles.footerAddressTitle}>Working in the US</h2>
          <p>
            We have a special formula for working successfully with
            organisations in the US
          </p>
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
