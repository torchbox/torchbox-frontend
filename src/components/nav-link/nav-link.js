// Vendor Modules
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
// Styles
import styles from './nav-link.module.scss'

const NavLink = ({
  title,
  strap,
  badge,
  href,
  onClick,
  active,
  collapsed,
  dropdownLinks,
}) => (
  <li className={styles.parent}>
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
    <div className={styles.dropdown}>
      <ul>
        {dropdownLinks.map(link => (
          <li>
            <Link to={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

NavLink.propTypes = {
  title: PropTypes.string,
  strap: PropTypes.string,
  badge: PropTypes.number,
  href: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
  dropdownLinks: PropTypes.array,
}

NavLink.defaultProps = {
  onClick: null,
  isOpen: false,
  dropdownLinks: [],
}

export default NavLink
