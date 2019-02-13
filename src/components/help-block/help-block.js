import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './help-block.module.scss'
import Contact from '../contact/contact'
import { renderTorchUp } from '../../utils/torchup'

class HelpBlock extends React.Component {
  render() {
    const { title, links, sectionTitle, contact } = this.props
    return (
      <div className={styles.blockContainer}>
        <section className={styles.blockContent}>
          <span className={styles.pageSectionTitle}>{sectionTitle}</span>
          <h1 className={styles.blockTitle} {...renderTorchUp(title)} />

          {links != null ? (
            <div className={styles.blockLinksContainer}>
              <ul className={styles.blockLinksList}>
                {links.map((link, index) => (
                  <li
                    key={`key-point-${index}`}
                    className={styles.blockLinksItem}
                  >
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

        {contact ? (
          <Contact className={styles.blockContact} {...contact} />
        ) : null}
      </div>
    )
  }
}

HelpBlock.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  sectionTitle: PropTypes.string.isRequired,
  greetingImage: PropTypes.string,
  contact: PropTypes.object,
}

HelpBlock.defaultProps = {
  title: 'We can help you…',
  links: [],
  sectionTitle: 'Services',
}

export default HelpBlock
