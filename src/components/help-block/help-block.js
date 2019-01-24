import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ContactBlock from '../contact'

import styles from './help-block.module.scss'
import Contact from '../contact/contact'

const HelpBlock = ({ links, sectionTitle, greetingImage, contactDetails }) => (
  <div className={styles.blockContainer}>
    <img
      className={styles.blockImage}
      src={greetingImage}
    />

    <section className={styles.blockContent}>
      <span className={styles.pageSectionTitle}>{sectionTitle}</span>
      <h1 className={styles.blockTitle}>We make products fast and transform the way your organisation works at the same time...</h1>

      {links != null ? (
        <div className={styles.blockLinksContainer}>
          <ul className={styles.blockLinksList}>
            {links.map(link => (
              <li className={styles.blockLinksItem}>
                <div
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

    { contactDetails ? (
      <Contact
        className={styles.blockContact}
        title={contactDetails.title}
        email={contactDetails.email}
        number={contactDetails.phone}
        avatar={contactDetails.avatar}
        />
    ) : null}

    <div className={styles.blockBorder} />
  </div>
)

HelpBlock.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  sectionTitle: PropTypes.string.isRequired,
  greetingImage: PropTypes.string,
  contactDetails: PropTypes.object
}

HelpBlock.defaultProps = {
  title: 'We can help you…',
  links: [],
  sectionTitle: 'Services',
  greetingImage: require('../../images/help-character.png')
}

export default HelpBlock
