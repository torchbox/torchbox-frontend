// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import TeaserLink from '@components/teaser-block/teaser'
// Utilities
import { renderTorchUp, parseToHtml } from '@utils/torchup'
import { pageUrl } from '@utils/urls'
import { ReactComponent as GreetingImage } from '@images/man-fruit.svg'
// Styles
import styles from './culture-page.module.scss'
import RichText from 'src/components/rich-text/index';

const CulturePage = ({ strapline, straplineVisible, heroImage, intro, links, body, contact, contactReasons }) => {
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

  const heroTitleStyles = [styles.pageHeroTitle];
  if (!straplineVisible) {
    heroTitleStyles.push(styles.pageHeroTitleHidden);
  }

  return (
    <div className={styles.page}>
      <div
        className={styles.pageHero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.pageHeroContent}>
          <h1 className={heroTitleStyles.join(' ')} {...renderTorchUp(strapline)} data-contentpath-field="strapline" />
        </div>
      </div>

      <div className={styles.pageContent}>
        <GreetingImage className={styles.pageImage} />
        <h1 className={styles.pageIntro} data-contentpath-field="intro">
          <RichText value={parseToHtml(intro)} />
        </h1>
        <Teasers />
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={body}
          contentPathField="body"
        />
        <Teasers />
      </div>
      <Contact className={styles.pageContact} {...contact} {...contactReasons} />
    </div>
  )
}

CulturePage.propTypes = {
  strapline: PropTypes.string,
  straplineVisible: PropTypes.bool.isRequired,
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
