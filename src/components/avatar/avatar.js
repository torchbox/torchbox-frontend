import React from 'react'
import PropTypes from 'prop-types'

import styles from './avatar.module.scss'

const Avatar = ({ src, className, containerClassName }) => (
  <div className={[styles.avatar, containerClassName].join(' ')}>
    <img className={[styles.avatarImage, className].join(' ')} src={src} />
  </div>
)

Avatar.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  className: '',
}

export default Avatar
