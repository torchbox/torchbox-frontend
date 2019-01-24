import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './teaser-block.scss'

const TeaserBlock = ({ teasers, className }) => (
  <div className={[styles.teaserBlock, className].join(' ')}>
    <div className={styles.teaserBlockContainer}>
      <h3 className={styles.teaserBlockTitle}>More from Torchbox...</h3>
      <div className={styles.teaserBlockList}>
        {teasers.map(teaser => (
          <Link to={teaser.link} className={styles.teaserBlockItem}>
            <h1 className={styles.teaserBlockItemTitle}>
              {teaser.title}
            </h1>
            <span  className={styles.teaserBlockItemDesc}>{teaser.description}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

TeaserBlock.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

TeaserBlock.defaultProps = {
  className: '',
}

export default TeaserBlock
