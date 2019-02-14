// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import { renderTorchUp } from '../../utils/torchup'
// Styles
import styles from './title-block.module.scss'

const TitleBlock = ({ title, className }) => (
  <div className={[styles.block, className].join(' ')}>
    <h1 className={styles.blockTitle} {...renderTorchUp(title)} />
  </div>
)

TitleBlock.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

TitleBlock.defaultProps = {
  className: '',
}

export default TitleBlock
