import React from 'react'
import PropTypes from 'prop-types'

import styles from './bustout.module.scss'

const Bustout = ({ src, align = 'left', className, title, caption }) => (
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
      <div className={styles.bustoutImage}>
        <img src={src}/>
      </div>
      {title || caption ? (
        <div className={styles.bustoutCaption}>
          <div className={styles.bustoutCaptionInner}>
            <h2>{title}</h2>
            <p>{caption}</p>
          </div>
        </div>
      ) : null}
    </div>
  </div>
)

Bustout.propTypes = {
  src: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'full']),
  className: PropTypes.string,
}

Bustout.defaultProps = {
  className: '',
  src: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/todd.jpg',
}

export default Bustout
