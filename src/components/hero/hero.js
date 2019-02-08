import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './hero.module.scss'
import { renderTorchUp } from '../../utils/torchup'

const Hero = ({ title, description, links, collapsed, greetingImage, darkTheme, alignImageRight }) => {
  return (
    <div
      className={[
        collapsed
          ? styles.collapsedHeroContainer
          : styles.heroContainer,
        darkTheme
          ? styles.darkTheme
          : ''
      ].join(' ')}
    >
      <section className={styles.heroContent}>
        <h1 className={styles.heroTitle} {...renderTorchUp(title)} />
        <p className={styles.heroDesc}  {...renderTorchUp(description)}  />
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
      <img src={greetingImage} className={
        alignImageRight ? styles.heroImageRight : styles.heroImage
      } />
</div>
)
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  collapsed: PropTypes.bool,
}

Hero.defaultProps = {
  links: [],
  collapsed: false,
  greetingImage: require('../../images/help-character.svg').default,
}

export default Hero
