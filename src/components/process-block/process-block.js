import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './process-block.module.scss'
import { renderTorchUp } from '../../utils/torchup'

const ProcessBlock = ({ title, processes, className, sectionTitle }) => (
  <div className={[styles.processBlock, className].join(' ')}>
    <div className={styles.processContainer}>
      <span className={styles.pageSectionTitle}>{sectionTitle}</span>
      <h1 className={styles.processTitle} {...renderTorchUp(title)} />

      <div className={styles.processImageContainer}>
        <img
          className={styles.processDesktopImage}
          src={require('../../images/processes-desktop.png')}
          alt=""
        />
        <img
          className={styles.processMobileImage}
          src={require('../../images/processes-mobile.png')}
          alt=""
        />
      </div>
    </div>
  </div>
)

ProcessBlock.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  sectionTitle: PropTypes.string,
}

ProcessBlock.defaultProps = {
  className: '',
  sectionTitle: 'Process',
}

export default ProcessBlock
