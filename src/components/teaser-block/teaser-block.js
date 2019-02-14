// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Components
import TeaserLink from './teaser'
// Utilities
import { renderTorchUp } from '../../utils/torchup'
// Styles
import styles from './teaser-block.module.scss'

const TeaserBlock = ({ title, teasers, className }) => {
  return (
    <div className={[styles.teaserBlock, className].join(' ')}>
      <div className={styles.teaserBlockContainer}>
        <h3 className={styles.teaserBlockTitle} {...renderTorchUp(title)} />
        <div className={styles.teaserBlockList}>
          {teasers.map((teaser, index) => (
            <TeaserLink
              key={`teaser-${index}`}
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
  teasers: PropTypes.array,
}

TeaserBlock.defaultProps = {
  className: '',
  teasers: [],
  title: 'More from Torchbox...',
}

export default TeaserBlock
