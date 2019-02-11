import React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'

import styles from './service-page.module.scss'
import Contact from '../../components/contact-detailed'
import Hero from '../../components/hero'
import HelpBlock from '../../components/help-block'
import TestimonialsBlock from '../../components/testimonials-block'
import ProcessImageBlock from '../../components/process-image-block'
import CaseStudiesBlock from '../../components/case-studies-block'
import Blogs from '../../components/blogs-listing-block/blogs'
import ProcessBlock from '../../components/process-block/process-block'

class ServicePage extends React.Component {
  constructor (props) {
    super(props)
    this.sectionRefs = {}
    props.blocks.map(({ type, data }) => {
      if (data) {
        this.sectionRefs[type] = {
          title: data.sectionTitle,
          ref: React.createRef()
        }
      }
    })
  }

  componentDidMount() {
    if (window) {
      const { section } = qs.parse(window.location.hash)
      if (section) {
      }
    }
  }

  render() {
    const { blocks, darkTheme } = this.props

    return (
      <div className={[styles.page].join(' ')}>
        {blocks.map(({ type, data }) => {
          switch (type) {

            case 'hero-block':
              return <Hero
                title={data.strapline}
                description={data.intro}
                links={data.links}
                greetingImage={data.greetingImage}
                alignImageRight={data.alignImageRight}
                darkTheme={darkTheme}
              />

            case 'help-block':
              return <HelpBlock
                ref={this.sectionRefs[type].ref}
                title={data.heading}
                links={data.links}
                contactDetails={data.contact}
                sectionTitle={data.sectionTitle}
              />

            case 'testimonials-block':
              return <TestimonialsBlock
                ref={this.sectionRefs[type].ref}
                logos={data.logos.map(logo => ({
                  label: '',
                  image: logo.image.src,
                }))}
                testimonials={data.testimonials}
                sectionTitle={data.sectionTitle}
              />

            case 'process-image-block':
              return <ProcessImageBlock
                ref={this.sectionRefs[type].ref}
                title={data.title}
                sectionTitle={data.sectionTitle}
              />

            case 'process-block':
              return <ProcessBlock
                ref={this.sectionRefs[type].ref}
                sectionTitle={data.sectionTitle}
                processes={data.processes}
              />

            case 'case-studies-block':
              return <CaseStudiesBlock
                ref={this.sectionRefs[type].ref}
                caseStudies={data.caseStudies}
                listingUrl={data.listingUrl}
                sectionTitle={data.sectionTitle}
              />

            case 'blogs-block':
              return <Blogs
                ref={this.sectionRefs[type].ref}
                blogs={data.blogs}
                listingUrl={data.listingUrl}
                sectionTitle={data.sectionTitle}
              />

          }
        })}
        <Contact className={styles.pageContact}/>
      </div>
    )
  }

}

ServicePage.propTypes = {
  blocks: PropTypes.array,
}

ServicePage.defaultProps = {}

export default ServicePage
