import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Footer from '../footer'
import TeaserBlock from '../teaser-block'
import styles from './layout.module.scss'
import ThemeContext from '../../context/theme-context'

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = { currentUrl: '#1' }
    this.theme = {
      'light': styles.lightTheme,
      'dark': styles.darkTheme,
      'dark--transparent': styles.darkThemeTransparent
    }[props.theme || 'light']
  }

  render() {
    const { children, headerShouldCollapse, title, nestedLinks } = this.props

    const links = [
      {
        href: '/',
        title: 'Design + build products',
        strap: 'For digital design and engineering services',
      },
      {
        href: 'wagtail',
        title: 'Wagtail CMS services',
        strap: 'For web builds with the Wagtail open source CMS',
      },
      {
        href: 'digital-marketing',
        title: 'Digital marketing',
        strap: 'For our data driven digital marketing services',
      },
      {
        href: 'culture-and-jobs',
        title: 'Culture + jobs',
        strap: 'For our data driven digital marketing services',
        badge: 5,
      },
    ].map(link => {
      if (window) {
        if (link == window.location.pathname.replace('/', '')) {
          return {
            ...link,
            active: true
          }
        }
      }
      return link
    })

    return (
      <ThemeContext.Provider value={this.theme}>
        <div className={this.theme}>
          <Header
            title={title}
            currentUrl={this.state.currentUrl}
            shouldCollapse={headerShouldCollapse}
            links={links}
            nestedLinks={nestedLinks}
            navigateTo={url => {
              this.setState({ currentUrl: url })
            }}
          />
          <div className={styles.pageContainer}>
            {children}
            <TeaserBlock title={`More from Torchbox...`}/>
            <Footer
              links={[
                {
                  label: 'Blog',
                  href: '#',
                },
                {
                  label: 'Work',
                  href: '#',
                },
                {
                  label: 'Team',
                  href: '#',
                },
                {
                  label: 'Privacy',
                  href: '#',
                },
                {
                  label: 'Cookies',
                  href: '#',
                },
              ]}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nestedLinks: PropTypes.array,
  headerShouldCollapse: PropTypes.bool
}

Layout.defaultProps = {
  headerShouldCollapse: false,
  darkTheme: false
}

export default Layout
