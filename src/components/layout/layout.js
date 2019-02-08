import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import Footer from '../footer'
import TeaserBlock from '../teaser-block'
import styles from './layout.module.scss'
import { action } from '@storybook/addon-actions'

class Layout extends React.Component {
  state = { currentUrl: '#1' }

  render() {
    const { children, headerShouldCollapse, darkTheme, title, nestedLinks } = this.props
    return (
      <div className={darkTheme ? styles.darkTheme : ''}>
        <Header
          title={title}
          logoClick={action('Go to Homepage')}
          currentUrl={this.state.currentUrl}
          shouldCollapse={headerShouldCollapse}
          links={[
            {
              href: '/',
              title: 'Design + build products',
              strap: 'For digital design and engineering services',
            },
            {
              href: '/wagtail',
              title: 'Wagtail CMS services',
              strap: 'For web builds with the Wagtail open source CMS',
            },
            {
              href: '/digital-marketing',
              title: 'Digital marketing',
              strap: 'For our data driven digital marketing services',
            },
            {
              href: '#4',
              title: 'Culture + jobs',
              strap: 'For our data driven digital marketing services',
              badge: 5,
            },
          ]}
          nestedLinks={nestedLinks}
          navigateTo={url => {
            this.setState({ currentUrl: url })
          }}
        />
        <div className={styles.pageContainer}>
          {children}
          <TeaserBlock
            title={`More from Torchbox...`}
            teasers={[
              {
                image: require('../../images/tbx-flame.svg'),
                title: ['Wagtail CMS', <br />, 'services'],
                description: 'For web builds with the Wagtail open source CMS',
                link: '#',
              },
              {
                image: require('../../images/tbx-flame.svg'),
                title: ['Data', <br />, 'marketing'],
                description: 'For our data driven digital marketing services',
                link: '#',
              },
            ]}
          />
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
