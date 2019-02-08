import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ContactBlock from '../contact'

import styles from './help-block.module.scss'
import Contact from '../contact/contact'
import { renderTorchUp } from '../../utils/torchup'

const HelpBlock = ({
  title,
  links,
  sectionTitle,
  contactDetails,
}) => (
  <div className={styles.blockContainer}>
    <section className={styles.blockContent}>
      <span className={styles.pageSectionTitle}>{sectionTitle}</span>
      <h1 className={styles.blockTitle} {...renderTorchUp(title)} />

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

    {contactDetails ? (
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
  contactDetails: PropTypes.object,
}

HelpBlock.defaultProps = {
  title: 'We can help you…',
  links: [],
  sectionTitle: 'Services',
}

export default HelpBlock
