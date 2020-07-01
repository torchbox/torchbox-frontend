// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import cssVars from 'css-vars-ponyfill'
import scrollIntoView from 'scroll-into-view';
import CookieConsent from 'react-cookie-consent';
// Components
import Header from '@components/header'
import Footer from '@components/footer'
import TeaserBlock from '@components/teaser-block'
import ThemeProvider from '@components/theme-provider'
import SEO from '@components/seo'
// Utilities
import { safeGet } from '@utils/safeget'
import { blogsUrl, caseStudiesUrl, teamUrl, jobsUrl, removeSlashes } from '@utils/urls'
// Styles
import '@styles/_fonts.scss'
import styles from './layout.module.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUrl: '#1' }
    this.topRef = React.createRef();
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
      hideTeasers,
      theme,
      twitterImage,
      facebookImage,
      seoTitle,
      seoDesc,
      seoLang
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
              title={seoTitle}
              description={seoDesc}
              lang={seoLang }
              facebookImage={safeGet(facebookImage, 'src.url', null)}
              twitterImage={safeGet(twitterImage, 'src.url', null)}
            />
            <ThemeProvider theme={theme}>
              <CookieConsent
                location="bottom"
                buttonText="Opt-in"
                declineButtonText="Opt-out"
                cookieName="cookie-consent"
                enableDeclineButton={true}
                style={{ background: 'var(--color-blue)' }}
                buttonStyle={{ backgroundColor: '#fd5765', color: 'white', fontSize: '16px' }}
                declineButtonStyle={{ backgroundColor: 'transparent', color: 'white', fontSize: '16px', marginRight: '0' }}
              >
                  We use cookies to provide you with a better service. Carry on browsing if you&apos;re happy with this, or <Link style={{ color: 'white', borderBottom: '2px solid #fd5765' }} to="/cookies">find out more</Link>.
              </CookieConsent>
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
                navigateToTop={() => {
                  scrollIntoView(this.topRef.current, {
                    time: 400,
                  })
                }}
              />
                <main ref={this.topRef} className={styles.pageContainer}>
                  {children}
                  { !hideTeasers ? (
                    <TeaserBlock
                      title={`More from Torchbox...`}
                      ignoreSlug={ignoreServiceTeaser}
                    />
                  ) : null }
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
        href: '/digital-products/',
        title: 'Design + build products',
        strap: 'For digital design and engineering services',
      },
      {
        href: '/wagtail-cms/',
        title: 'Wagtail CMS services',
        strap: 'For web builds with the Wagtail open source CMS',
      },
      {
        href: '/digital-marketing/',
        title: 'Digital marketing',
        strap: 'For our data driven digital marketing services',
      },
      {
        href: '/culture-and-jobs/',
        title: 'Culture + jobs',
        strap: 'For our data driven digital marketing services',
        badge: safeGet(data, 'wagtail.jobsIndexPage.jobs.length', 0),
        dropdownLinks: [
          { title: 'Team', href: teamUrl() },
          { title: 'Jobs', href: jobsUrl() },
        ],
      },
    ].map(link => {
      if (this.props.location && removeSlashes(this.props.location.pathname) === removeSlashes(link.href)) {
        return {
          ...link,
          active: true,
        }
      }
      return link
    })
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  facebookImage: PropTypes.object,
  twitterImage: PropTypes.object,
  seoTitle: PropTypes.string,
  seoDesc: PropTypes.string,
  seoLang: PropTypes.string,
  nestedLinks: PropTypes.array,
  headerShouldCollapse: PropTypes.bool,
  theme: PropTypes.string,
  title: PropTypes.string,
  ignoreServiceTeaser: PropTypes.string,
  hideTeasers: PropTypes.bool,
  location: PropTypes.object,
}

Layout.defaultProps = {
  headerShouldCollapse: false,
  darkTheme: false,
  hideTeasers: false,
}

export default Layout
