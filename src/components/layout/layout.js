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
    const { children, headerShouldCollapse } = this.props
    return (
      <>
        <Header
          logoClick={action('Go to Homepage')}
          currentUrl={this.state.currentUrl}
          shouldCollapse={headerShouldCollapse}
          links={[
            {
              href: '#1',
              title: 'Digital product agency',
              strap: 'For digital design and engineering services',
              links: [
                { href: '#1', title: 'How can we help' },
                { href: '#1', title: 'Testimonials' },
                { href: '#1', title: 'Our process' },
                { href: '#1', title: 'Case studies' },
                { href: '#1', title: 'Out thinking' },
              ],
            },
            {
              href: '#2',
              title: 'Wagtail CMS',
              strap: 'For web builds with the Wagtail open source CMS',
              links: [
                { href: '#1', title: 'How can we help' },
                { href: '#1', title: 'Testimonials' },
                { href: '#1', title: 'Our process' },
                { href: '#1', title: 'Case studies' },
                { href: '#1', title: 'Out thinking' },
              ],
            },
            {
              href: '#3',
              title: 'Data + acquisition',
              strap: 'For our data driven digital marketing services',
              links: [
                { href: '#1', title: 'How can we help' },
                { href: '#1', title: 'Testimonials' },
                { href: '#1', title: 'Our process' },
                { href: '#1', title: 'Case studies' },
                { href: '#1', title: 'Out thinking' },
              ],
            },
            {
              href: '#4',
              title: 'Culture + Jobs',
              strap: 'For our data driven digital marketing services',
              badge: 5,
            },
          ]}
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
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerShouldCollapse: PropTypes.bool
}

Layout.defaultProps = {
  headerShouldCollapse: false
}

export default Layout
