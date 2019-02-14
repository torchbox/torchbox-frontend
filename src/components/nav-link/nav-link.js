// Vendor Modules
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// Styles
import styles from './nav-link.module.scss'

const NavLink = ({ title, strap, badge, href, onClick, active, collapsed }) => (
  <Link
    to={href}
    className={[
      collapsed ? styles.collapsedNavLink : styles.navLink,
      active ? styles.active : null,
    ].join(' ')}
    onClick={onClick}
  >
    <div className={styles.title}>
      {title}
      {badge != null ? <div className={styles.badge}>{badge}</div> : null}
    </div>
  </Link>
)

NavLink.propTypes = {
  title: PropTypes.string,
  strap: PropTypes.string,
  badge: PropTypes.number,
  href: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
}

NavLink.defaultProps = {
  onClick: null,
  isOpen: false,
}

export default NavLink
