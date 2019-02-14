// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Styles
import styles from './menu-button.module.scss'

const MenuButton = ({ onClick, isOpen, className }) => (
  <a
    onClick={onClick}
    className={[
      styles.menuButton,
      className,
      isOpen ? styles.twist : null,
    ].join(' ')}
  >
    <span />
    <span />
    <span />
  </a>
)

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

MenuButton.defaultProps = {
  onClick: null,
  isOpen: false,
}

export default MenuButton
