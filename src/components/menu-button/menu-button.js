import React from 'react'
import PropTypes from 'prop-types'

import styles from './menu-button.module.scss'

const MenuButton = ({ onClick, isOpen }) => (
  <a
    onClick={onClick}
    className={[styles.menuButton, isOpen ? styles.twist : null].join(' ')}
  >
    <span />
    <span />
    <span />
  </a>
)

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

MenuButton.defaultProps = {
  onClick: null,
  isOpen: false,
}

export default MenuButton
