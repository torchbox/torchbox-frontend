import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './teaser-block.scss'

const TeaserBlock = ({ teasers, className }) => (
  <div className={[styles.teaserBlock, className].join(' ')}>
    <div className={styles.teaserBlockList}>
      {teasers.map(teaser => (
        <Link to={teaser.link} className={styles.teaserBlockItem}>
          <img src={teaser.image} alt="" className={styles.teaserBlockItemImage}/>
          <h1 className={styles.teaserBlockItemTitle}>
            {teaser.title}
            <img src={require("../../images/icons/chevron.png")} alt=""/>
          </h1>
          <h3  className={styles.teaserBlockItemDesc}>{teaser.description}</h3>
        </Link>
      ))}
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
