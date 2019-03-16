// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import cssVars from 'css-vars-ponyfill'
// Components
import Header from '@components/header'
import Footer from '@components/footer'
import TeaserBlock from '@components/teaser-block'
import ThemeProvider from '@components/theme-provider'
import SEO from '@components/seo'
// Utilities
import { safeGet } from '@utils/safeget'
import { blogsUrl, caseStudiesUrl, teamUrl, jobsUrl } from '@utils/urls'
// Styles
import '@styles/_fonts.scss'
import styles from './layout.module.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUrl: '#1' }
  }

  componentDidMount() {
    // Fix IE11 so that themeing works
    if (typeof window !== `undefined`) {
      cssVars({
        watch: true,
      })
    }
  }

  render() {
    const {
      children,
      headerShouldCollapse,
      collapsed,
      title,
      nestedLinks,
      ignoreServiceTeaser,
      theme,
      onLogoClick,
    } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            wagtail {
              jobsIndexPage {
                jobs {
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <SEO
              title={this.props.seoTitle}
              description={this.props.seoDesc}
              lang={this.props.seoLang }
            />
            <ThemeProvider theme={theme}>
              <Header
                title={title}
                currentUrl={this.state.currentUrl}
                shouldCollapse={headerShouldCollapse}
                collapsed={collapsed}
                links={this.renderLinks(data)}
                nestedLinks={nestedLinks}
                navigateTo={url => {
                  this.setState({ currentUrl: url })
                }}
                onLogoClick={onLogoClick}
              />
                <main className={styles.pageContainer}>
                  {children}
                  <TeaserBlock
                    title={`More from Torchbox...`}
                    ignoreSlug={ignoreServiceTeaser}
                  />
                </main>
                <Footer
                  links={[
                    {
                      label: 'Blog',
                      href: blogsUrl(),
                    },
                    {
                      label: 'Work',
                      href: caseStudiesUrl(),
                    },
                    {
                      label: 'Team',
                      href: teamUrl(),
                    },
                    {
                      label: 'Privacy',
                      href: '/privacy/',
                    },
                    {
                      label: 'Cookies',
                      href: '/cookies/',
                    },
                  ]}
                />
            </ThemeProvider>
          </>
        )}
      />
    )
  }

  renderLinks = data => {
    return [
      {
        href: '',
        title: 'Design + build products',
        strap: 'For digital design and engineering services',
      },
      {
        href: 'wagtail-cms',
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
        badge: safeGet(data, 'wagtail.jobsIndexPage.jobs.length', 0),
        dropdownLinks: [
          { title: 'Team', href: teamUrl() },
          { title: 'Jobs', href: jobsUrl() },
        ],
      },
    ].map(link => {
      if (typeof window !== `undefined`) {
        if (window.location.pathname.replace(/\//g, '') === link.href) {
          return {
            ...link,
            active: true,
          }
        }
      }
      return link
    })
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nestedLinks: PropTypes.array,
  headerShouldCollapse: PropTypes.bool,
  theme: PropTypes.string,
  title: PropTypes.string,
  ignoreServiceTeaser: PropTypes.string,
}

Layout.defaultProps = {
  headerShouldCollapse: false,
  darkTheme: false,
}

export default Layout
