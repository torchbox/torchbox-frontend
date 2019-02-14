// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Components
import AnimatedCharacter from '../animated-character/animated-character'
import ParentPageLink from '../parent-page-link/parent-page-link'
// Utilities
import { renderTorchUp } from '../../utils/torchup'
import { pageUrl } from '../../utils/urls'
// Styles
import styles from './hero.module.scss'

const Hero = ({
  title,
  description,
  links,
  collapsed,
  greetingImageType,
  parentLink,
}) => {
  return (
    <div
      className={[
        collapsed ? styles.collapsedHeroContainer : styles.heroContainer,
      ].join(' ')}
    >
      <section className={styles.heroContent}>
        {parentLink ? (
          <ParentPageLink
            label={parentLink.name}
            href={pageUrl(parentLink.servicePage)}
          />
        ) : null}

        <h1 className={styles.heroTitle} {...renderTorchUp(title)} />
        <p className={styles.heroDesc} {...renderTorchUp(description)} />
        {links != null ? (
          <div className={styles.heroLinksContainer}>
            <ul className={styles.heroLinksList}>
              {links.map((link, index) => (
                <li key={`hero-link-${index}`} className={styles.heroLinksItem}>
                  <a onClick={link.onClick} href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <AnimatedCharacter character={greetingImageType} />
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.array,
  collapsed: PropTypes.bool,
  greetingImageType: PropTypes.string,
  parentLink: PropTypes.object,
}

Hero.defaultProps = {
  links: [],
  collapsed: false,
  greetingImageType: 'woman-left',
}

export default Hero
