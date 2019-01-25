import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './hero.module.scss'
import { renderTorchUp } from '../../utils/torchup'

const Hero = ({ title, description, links, collapsed }) => (
  <div
    className={collapsed ? styles.collapsedHeroContainer : styles.heroContainer}
  >
    <section className={styles.heroContent}>
      <h1 className={styles.heroTitle} {...renderTorchUp(title)}/>
      <p className={styles.heroDesc}>{description}</p>
      {links != null ? (
        <div className={styles.heroLinksContainer}>
          <ul className={styles.heroLinksList}>
            {links.map(link => (
              <li className={styles.heroLinksItem}>
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
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  collapsed: PropTypes.bool,
}

Hero.defaultProps = {
  links: [],
  collapsed: false,
}

export default Hero
