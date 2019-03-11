// Vendor Modules
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import qs from 'query-string'
import scrollIntoView from 'scroll-into-view'
// Components
import Contact from '@components/contact-detailed'
import Hero from '@components/hero'
import HelpBlock from '@components/help-block'
import TestimonialsBlock from '@components/testimonials-block'
import ProcessImageBlock from '@components/process-image-block'
import CaseStudiesBlock from '@components/case-studies-block'
import Blogs from '@components/blogs-listing-block/blogs'
import ProcessBlock from '@components/process-block/process-block'
import Layout from '@components/layout'
// Styles
import styles from './service-page.module.scss'

class ServicePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeSectionTitle: '', collapsed: false}
    this.sectionRefs = {}
    props.blocks.map(({ type, data }) => {
      if (data) {
        this.sectionRefs[type] = {
          title: data.sectionTitle,
          ref: React.createRef(),
          excludeFromLinks: !!data.excludeFromLinks,
        }
      }
    })
    this.pageNavRef = React.createRef();
  }

  navigateToSection = section => {
    if (section == null) {
      section = qs.parse(window.location.hash).section
    }

    if (section) {
      const sectionRef = Object.values(this.sectionRefs).find(
        ({ title }) => title == section
      )

      this.setState({ activeSectionTitle: section })

      if (sectionRef) {
        if (sectionRef.ref) {
          if (sectionRef.ref.current) {
            const sectionEl = ReactDOM.findDOMNode(sectionRef.ref.current)
            scrollIntoView(sectionEl, {
              time: 400,
              align: {
                topOffset: 80,
              },
            })
          }
        }
      }
    }
  }

  scroll = () => {
    Object.values(this.sectionRefs).map(sectionRef => {
      if (sectionRef.ref.current) {
        const el = ReactDOM.findDOMNode(sectionRef.ref.current)
        const { y } = el.getBoundingClientRect()

        // Set element as active in the navbar when it's 25% up screen
        if (y + 0.1 * window.innerHeight < window.innerHeight) {
          this.setState({ activeSectionTitle: sectionRef.title })
        }
      }
    })

    // checks if the header is in a collpsed state or not.
    // works out position of the in page navigation links (part of the hero) in relation
    // to the top of the viewport.
    // This information is then passed to both hero.js and header.js as it affects the styling of both
    if (this.pageNavRef.current) {
      if (this.pageNavRef.current.getBoundingClientRect().top <= 50) {
        this.setState({ collapsed: true })
      } else {
        this.setState({ collapsed: false })
      }
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      this.navigateToSection()
      window.addEventListener('hashchange', this.navigateToSection)
      window.addEventListener('scroll', this.scroll, false)
    }
  }

  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('scroll', this.scroll, false)
      window.removeEventListener('hashchange', this.navigateToSection)
    }
  }

  render() {
    const { blocks, title, theme, serviceSlug } = this.props

    const nestedNav = Object.values(this.sectionRefs)
      .filter(section => !section.excludeFromLinks)
      .map(section => ({
        title: section.title,
        href: '',
        active: section.title === this.state.activeSectionTitle,
        onClick: e => {
          e.preventDefault()
          this.navigateToSection(section.title)
        },
      }))

    return (
      <Layout
        title={title}
        theme={theme}
        headerShouldCollapse={true}
        collapsed = {this.state.collapsed}
        nestedLinks={nestedNav}
        ignoreServiceTeaser={serviceSlug}
        onLogoClick={() => this.navigateToSection('hero')}
      >
        <div className={[styles.page].join(' ')}>
          {blocks.map(({ type, data }) => {
            switch (type) {
              case 'hero-block':
                return (
                  <Hero
                    ref={this.sectionRefs[type].ref}
                    title={data.strapline}
                    description={data.intro}
                    links={nestedNav}
                    greetingImageType={data.greetingImageType}
                    parentLink={data.parentLink}
                    collapsed={this.state.collapsed}
                    pageNavRef={this.pageNavRef}
                    key={type}
                  />
                )

              case 'help-block':
                return (
                  <HelpBlock
                    ref={this.sectionRefs[type].ref}
                    title={data.heading}
                    links={data.links}
                    contact={data.contact}
                    sectionTitle={data.sectionTitle}
                    key={type}
                  />
                )

              case 'testimonials-block':
                return (
                  <TestimonialsBlock
                    ref={this.sectionRefs[type].ref}
                    logos={data.logos.map(logo => ({
                      label: '',
                      image: logo.image.src,
                    }))}
                    testimonials={data.testimonials}
                    sectionTitle={data.sectionTitle}
                    key={type}
                  />
                )

              case 'process-image-block':
                return (
                  <ProcessImageBlock
                    ref={this.sectionRefs[type].ref}
                    title={data.title}
                    sectionTitle={data.sectionTitle}
                    key={type}
                  />
                )

              case 'process-block':
                return (
                  <ProcessBlock
                    ref={this.sectionRefs[type].ref}
                    sectionTitle={data.sectionTitle}
                    title={data.title}
                    processes={data.processes}
                    key={type}
                  />
                )

              case 'case-studies-block':
                return (
                  <CaseStudiesBlock
                    ref={this.sectionRefs[type].ref}
                    caseStudies={data.caseStudies}
                    listingUrl={data.listingUrl}
                    sectionTitle={data.sectionTitle}
                    key={type}
                  />
                )

              case 'blogs-block':
                return (
                  <Blogs
                    ref={this.sectionRefs[type].ref}
                    blogs={data.blogs}
                    listingUrl={data.listingUrl}
                    sectionTitle={data.sectionTitle}
                    key={type}
                  />
                )

              case 'contact-detailed':
                return (
                  <Contact className={styles.pageContact} {...data.contact} key={type} />
                )
            }
          })}
        </div>
      </Layout>
    )
  }
}

ServicePage.propTypes = {
  blocks: PropTypes.array,
  title: PropTypes.string,
  theme: PropTypes.string,
  serviceSlug: PropTypes.string,
}

ServicePage.defaultProps = {}

export default ServicePage
