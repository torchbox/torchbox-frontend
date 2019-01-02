import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './hero.module.scss'

const Hero = ({ links, collapsed }) => (
  <div
    className={collapsed ? styles.collapsedHeroContainer : styles.heroContainer}
  >
    <section className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        The digital product agency{' '}
        <p className={styles.accent}>for tomorrow's non-profits.</p>
      </h1>
      {links != null ? (
        <div className={styles.heroLinksContainer}>
          <ul className={styles.heroLinksList}>
            {links.map(link => (
              <li className={styles.heroLinksItem}>
                <img
                  src={require('../../images/icons/chevron.png')}
                  className={styles.heroLinksItemArrow}
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
  </div>
)

Hero.propTypes = {
  links: PropTypes.array,
  collapsed: PropTypes.bool,
}

Hero.defaultProps = {
  links: [],
  collapsed: false,
}

export default Hero
