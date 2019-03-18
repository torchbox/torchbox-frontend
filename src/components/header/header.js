// Vendor Modules
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
// Components
import MenuButton from '@components/menu-button'
import NavLink from '@components/nav-link'
// Utilities
import { ReactComponent as Logo } from '@images/logo.svg'
import { ReactComponent as Flame } from '@images/tbx-flame.svg'
// Styles
import styles from './header.module.scss'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = { mobileNavOpen: false }
    this.mobileMenuRef = React.createRef()
    this.mobileMenuElement = null
  }

  componentDidMount() {
    this.mobileMenuElement = this.mobileMenuRef.current
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  mobileMenuHandleClick() {
    this.setState(
      { mobileNavOpen: !this.state.mobileNavOpen },
      () => {
        this.state.mobileNavOpen ? disableBodyScroll(this.mobileMenuElement) : enableBodyScroll(this.mobileMenuElement)
      }
    )
  }

  render() {
    const {
      title,
      links,
      collapsed,
      navigateTo,
      logoClick,
      nestedLinks,
      onLogoClick,
    } = this.props

    return (
      <div
        className={[
          collapsed ? styles.collapsedHeader : styles.header,
        ].join(' ')}
        role="banner"
      >
        <div className={styles.headerInner}>
          {collapsed ? (
            <div
              className={styles.collapsedLogoContainer}
              onClick={onLogoClick}
            >
              <Flame className={styles.logoFlame} onClick={logoClick} />
              <span className={styles.logoText}>{title}</span>
            </div>
          ) : (
            <div className={styles.logoContainer}>
              <Logo className={styles.logo} onClick={logoClick} />
            </div>
          )}

          <nav className={styles.primaryNavContainer} aria-label="Main navigation">
            <ul className={styles.primaryNavList}>
              {links.map((link, index) => (
                <NavLink
                  key={`main-nav-link-${index}`}
                  {...link}
                  collapsed={collapsed}
                  onClick={() => navigateTo(link.href)}
                />
              ))}
            </ul>
          </nav>

          {nestedLinks != null ? (
            <nav className={styles.nestedNavContainer} aria-label="In page navigation">
              <ul className={styles.nestedNavList}>
                {nestedLinks.map((link, index) => (
                  <li
                    key={`nested-nav-link-${index}`}
                    className={
                      link.active
                        ? styles.nestedNavItemActive
                        : styles.nestedNavItem
                    }
                  >
                    <a
                      className={styles.nestedNavLink}
                      onClick={link.onClick}
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <MenuButton
            className={styles.headerMenuButton}
            isOpen={this.state.mobileNavOpen}
            onClick={() => this.mobileMenuHandleClick()}
          />
        </div>

        <div className={styles.mobileNavContainer}>
          <nav
            className={
              this.state.mobileNavOpen
                ? styles.mobileNavModalOpen
                : styles.mobileNavModal
            }
            aria-label="Mobile navigation"
            ref={this.mobileMenuRef}
          >
            <ul className={styles.mobileNavList}>
              {links.map((link, index) => (
                <NavLink
                  key={`mobile-nav-link-${index}`}
                  {...link}
                  collapsed={collapsed}
                  onClick={() => navigateTo(link.href)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  navigateTo: PropTypes.func,
  logoClick: PropTypes.func,
  links: PropTypes.array,
  nestedLinks: PropTypes.array,
  shouldCollapse: PropTypes.bool,
  collapsed: PropTypes.bool,
  onLogoClick: PropTypes.func,
}

Header.defaultProps = {
  links: [],
  nestedLinks: [],
  shouldCollapse: false,
}

export default Header
