import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import MenuButton from '../menu-button'
import NavLink from '../nav-link'
import styles from './header.module.scss'

class Header extends React.Component {
  state = { mobileNavOpen: false, collapsed: false }

  componentDidMount() {
    if (this.props.shouldCollapse) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          if (!this.state.collapsed) {
            this.setState({ collapsed: true })
          }
        } else {
          if (this.state.collapsed) {
            this.setState({ collapsed: false })
          }
        }
      })
    }
  }

  render() {
    const {
      links,
      currentUrl,
      navigateTo,
      logoClick,
      activeNestedLink,
    } = this.props

    let nestedLinks = null
    const currentLink = links.find(({ href }) => href == currentUrl)
    if (currentLink) {
      nestedLinks = currentLink.links
    }

    return (
      <div
        className={
          this.state.collapsed ? styles.collapsedHeader : styles.header
        }
      >
        <div className={styles.headerInner}>
          {this.state.collapsed ? (
            <div className={styles.collapsedLogoContainer}>
              <img
                src={require('../../images/tbx-flame.svg')}
                className={styles.logo}
                onClick={logoClick}
              />
              <span className={styles.logoText}>Design + build products</span>
            </div>
          ) : (
            <div className={styles.logoContainer}>
              <img
                src={require('../../images/logo.svg')}
                className={styles.logo}
                onClick={logoClick}
              />
            </div>
          )}

          <div className={styles.primaryNavContainer}>
            <ul className={styles.primaryNavList}>
              {links.map(link => (
                <li>
                  <NavLink
                    {...link}
                    collapsed={this.state.collapsed}
                    onClick={() => navigateTo(link.href)}
                    active={currentUrl == link.href}
                  />
                </li>
              ))}
            </ul>
          </div>

          {nestedLinks != null ? (
            <div className={styles.nestedNavContainer}>
              <ul className={styles.nestedNavList}>
                {nestedLinks.map(link => (
                  <li
                    className={
                      activeNestedLink == link.href
                        ? styles.nestedNavItemActive
                        : styles.nestedNavItem
                    }
                  >
                    <Link onClick={link.onClick} to={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <MenuButton
            className={styles.headerMenuButton}
            isOpen={this.state.mobileNavOpen}
            onClick={() =>
              this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
            }
          />
        </div>

        <div className={styles.mobileNavContainer}>
          <div
            className={
              this.state.mobileNavOpen
                ? styles.mobileNavModalOpen
                : styles.mobileNavModal
            }
          >
            <ul className={styles.mobileNavList}>
              {links.map(link => (
                <li className={link.alignRight ? styles.alignRight : ''}>
                  <NavLink
                    {...link}
                    collapsed={this.state.collapsed}
                    onClick={() => navigateTo(link.href)}
                    active={currentUrl == link.href}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  links: PropTypes.array,
  shouldCollapse: PropTypes.bool
}

Header.defaultProps = {
  links: [],
  shouldCollapse: false
}

export default Header
