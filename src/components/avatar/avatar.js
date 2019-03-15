// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import styles from './avatar.module.scss'

const Avatar = ({ src, className, containerClassName, alt }) => (
  <div className={[styles.avatar, containerClassName].join(' ')}>
    <img
      className={[styles.avatarImage, className].join(' ')}
      src={src}
      alt={alt}
    />
  </div>
)

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  alt: PropTypes.string,
}

Avatar.defaultProps = {
  className: '',
  containerClassName: '',
  alt: '',
}

export default Avatar
