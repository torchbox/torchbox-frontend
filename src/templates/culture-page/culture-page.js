import React from 'react'
import PropTypes from 'prop-types'

import styles from './culture-page.module.scss'
import StreamfieldBlock from '../../components/streamfield-block'
import Contact from '../../components/contact-detailed'
import { renderTorchUp } from '../../utils/torchup'

const CulturePage = ({
  strapline,
  heroImage,
  intro,
  links,
  body,
  contact,
}) => (
  <div className={styles.page}>
    <div className={styles.pageHero} style={{ background: `url(${heroImage})` }}>
      <h1 {...renderTorchUp(strapline)} />
      <div className={styles.pageHeroMask} />
    </div>

    <p {...renderTorchUp(intro)}/>

    <Contact className={styles.pageContact} />
  </div>
)

CulturePage.propTypes = {
  strapline: PropTypes.string,
  heroImage: PropTypes.string,
  intro: PropTypes.string,
  links: PropTypes.array,
  body: PropTypes.array,
  contact: PropTypes.object
}

CulturePage.defaultProps = {
  strapline: '',
  intro: '',
  links: [],
  body: [],
}

export default CulturePage
