import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ContactBlock from '../contact'

import styles from './help-block.module.scss'
import Contact from '../contact/contact'

const HelpBlock = ({ links }) => (
  <div className={styles.blockContainer}>
    <img
      className={styles.blockImage}
      src={require('../../images/help-character.png')}
    />

    <section className={styles.blockContent}>
      <h1 className={styles.blockTitle}>We can help you…</h1>

      {links != null ? (
        <div className={styles.blockLinksContainer}>
          <ul className={styles.blockLinksList}>
            {links.map(link => (
              <li className={styles.blockLinksItem}>
                <img
                  src={require('../../images/icons/tick.png')}
                  className={styles.blockLinksItemIcon}
                />
                <Link onClick={link.onClick} to={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>

    <Contact
      className={styles.blockContact}
      title="Get in touch about your project"
      email="will@torchbox.com"
      number="+44 (0) 7545 468483"
    />

    <div className={styles.blockBorder} />
  </div>
)

HelpBlock.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
}

HelpBlock.defaultProps = {
  title: 'We can help you…',
  links: [],
}

export default HelpBlock
