// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import TeaserLink from '@components/teaser-block/teaser'
// Utilities
import { renderTorchUp } from '@utils/torchup'
import { pageUrl } from '@utils/urls'
import { ReactComponent as GreetingImage } from '@images/man-fruit.svg'
// Styles
import styles from './culture-page.module.scss'

const CulturePage = ({ strapline, heroImage, intro, links, body, contact, contactReasons }) => {
  const Teasers = () => (
    <div className={styles.pageLinks}>
      {links.map((link, index) => (
        <TeaserLink
          key={`culture-link-${index}`}
          className={styles.pageLinksTeaser}
          title={link.title}
          description={link.description}
          href={pageUrl(link.link)}
        />
      ))}
    </div>
  )

  return (
    <div className={styles.page}>
      <div
        className={styles.pageHero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.pageHeroContent}>
          <h1 className={styles.pageHeroTitle} {...renderTorchUp(strapline)} />
        </div>
      </div>

      <div className={styles.pageContent}>
        <GreetingImage className={styles.pageImage} />
        <h1 className={styles.pageIntro} {...renderTorchUp(intro)} />
        <Teasers />
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={body}
        />
        <Teasers />
      </div>
      <Contact className={styles.pageContact} {...contact} {...contactReasons} />
    </div>
  )
}

CulturePage.propTypes = {
  strapline: PropTypes.string,
  heroImage: PropTypes.string,
  intro: PropTypes.string,
  links: PropTypes.array,
  body: PropTypes.array,
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
}

CulturePage.defaultProps = {
  strapline: '',
  intro: '',
  links: [],
  body: [],
}

export default CulturePage
