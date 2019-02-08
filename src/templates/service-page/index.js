import React from 'react'

import { graphql } from 'gatsby'
import ServicePage from './service-page'
import Layout from '../../components/layout'
import { blogListing, caseStudyListing } from '../../utils/selectors'
import { caseStudiesUrl, blogsUrl, pageUrl } from '../../utils/urls'

export default ({ data, pageContext }) => {
  const page = data.wagtail.servicePages[0]
  let { blocks } = pageContext

  if (page) {
    let nestedNav = [];
    ['keyPointsSectionTitle', 'testimonialsSectionTitle', 'caseStudiesSectionTitle', 'blogsSectionTitle']
      .map(id => {
        const sectionTitle = page[id]
        if (sectionTitle) {
          nestedNav.push({ title: sectionTitle, href: `#section=${sectionTitle}` })
        }
      })

    blocks = blocks.map(block => {
      switch (block) {

        case 'hero-block':
          return (page.strapline || page.intro) ? {
            type: 'hero-block',
            data: {
              strapline: page.strapline,
              intro: page.intro,
              links: nestedNav,
              greetingImage: page.isDarktheme
                ? require('../../images/wagtail-greeting.svg').default
                : require('../../images/help-character.svg').default,
              alignImageRight: page.isDarktheme
            },
          } : {}

        case 'help-block':
          return (page.keyPoints) ? {
            type: 'help-block',
            data: {
              sectionTitle: page.keyPointsSectionTitle,
              heading: page.headingForKeyPoints,
              links: page.keyPoints.map(keyPoint => ({
                title: keyPoint.text,
                href: pageUrl(keyPoint.linkedPage),
              })),
              contact: {
                email: page.contact.emailAddress,
                phone: page.contact.phoneNumber,
              },
            },
          } : {}

        case 'testimonials-block':
          return (page.clientLogos || page.usaClientLogos || page.testimonials) ? {
            type: 'testimonials-block',
            data: {
              sectionTitle: page.testimonialsSectionTitle,
              logos: page.clientLogos.concat(page.usaClientLogos),
              testimonials: page.testimonials,
            },
          } : {}


        case 'process-block':
          return (page.useProcessBlockImage) ? {
            type: 'process-image-block',
            data: {
              sectionTitle: page.processSectionTitle
            },
          } : (page.processes) ? {
            type: 'process-block',
            data: {
              sectionTitle: page.processSectionTitle,
              processes: page.processes
            }
          } : {}

        case 'case-studies-block':
          return (page.caseStudies) ? {
            type: 'case-studies-block',
            data: {
              sectionTitle: page.caseStudiesSectionTitle,
              caseStudies: page.caseStudies.map(caseStudyListing),
              listingUrl: caseStudiesUrl(),
            },
          } : {}

        case 'blogs-block':
          return (page.blogPosts) ? {
            type: 'blogs-block',
            data: {
              sectionTitle: page.blogsSectionTitle,
              blogs: page.blogPosts.map(blogListing),
              listingUrl: blogsUrl(),
            },
          } : {}

      }
    })
  } else {
    blocks = []
  }

  return (
    <Layout
      title={page.title}
      darkTheme={page.isDarktheme}
      headerNestedNav={nestedNav}
      headerShouldCollapse={true}
      nestedLinks={nestedNav}>
      <ServicePage blocks={blocks} darkTheme={page.isDarktheme}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      servicePages(serviceSlug: $slug) {
        title
        isDarktheme
        strapline
        intro
        
        keyPointsSectionTitle
        headingForKeyPoints
        keyPoints {
          text
          linkedPage {
            type
            slug
          }
        }
        
        contact {
          name
          emailAddress
          phoneNumber
          image {
            src
          }
        }
        
        testimonialsSectionTitle
        clientLogos {
          image {
            src
          }
        }
        usaClientLogos {
          image {
            src
          }
        }
        testimonials {
          name
          quote
          role
        }
        
        
        useProcessBlockImage
        processSectionTitle
        processes {
          title
          description
          pageLinkLabel
          pageLink {
            type
            slug
          }
        }
        
        caseStudiesSectionTitle
        caseStudies(limit: 4) {
          title
          client
          listingSummary
          feedImage {
            rendition(format: "full") {
              url
            }
          }
        }
        
        blogsSectionTitle
        blogPosts(limit: 4) {
          title
          slug
          listingSummary
          authors {
            name
            personPage {
              role
              image {
                ...iconImage
              }
            }
          }
        }
        
        service {
          name
          slug
        }
      }
    }
  }
`
