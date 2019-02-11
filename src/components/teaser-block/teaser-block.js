import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import TeaserLink from './teaser'
import styles from './teaser-block.module.scss'
import { renderTorchUp } from '../../utils/torchup'

const TeaserBlock = ({ title, teasers, className }) => {
  return (
    <div className={[styles.teaserBlock, className].join(' ')}>
      <div className={styles.teaserBlockContainer}>
        <h3 className={styles.teaserBlockTitle} {...renderTorchUp(title)} />
        <div className={styles.teaserBlockList}>
          {teasers.map(teaser => (
            <TeaserLink
              href={teaser.href}
              title={teaser.name}
              description={teaser.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

TeaserBlock.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
}

TeaserBlock.defaultProps = {
  className: '',
  teasers: [],
  title: 'More from Torchbox...',
}

export default TeaserBlock
