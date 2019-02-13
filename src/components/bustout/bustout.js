import React from 'react'
import PropTypes from 'prop-types'

import styles from './bustout.module.scss'
import { renderTorchUp } from '../../utils/torchup'

const Bustout = ({ src, align = 'left', className, caption }) => (
  <div className={styles.bustoutContainer}>
    <div
      className={[
        align == 'full'
          ? styles.bustoutFull
          : align == 'right'
          ? styles.bustoutRightAligned
          : styles.bustout,
        className,
      ].join(' ')}
    >
      <div
        className={styles.bustoutImage}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
      {caption ? (
        <div className={styles.bustoutCaption}>
          <div
            className={styles.bustoutCaptionInner}
            {...renderTorchUp(caption)}
          />
        </div>
      ) : null}
    </div>
  </div>
)

Bustout.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'full']),
  className: PropTypes.string,
}

Bustout.defaultProps = {
  className: '',
  src: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/todd.jpg',
}

export default Bustout
