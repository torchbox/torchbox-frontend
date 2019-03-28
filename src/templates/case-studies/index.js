// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import CaseStudyListingPage from './case-study-listing'
import Layout from '@components/layout'

const CaseStudyListingContainer = ({ data }) => {
  return (
    <Layout
      seoTitle={data.wagtail.caseStudiesIndexPage.pageTitle}
      seoDesc={data.wagtail.caseStudiesIndexPage.searchDescription}
    >
      <CaseStudyListingPage
        title={data.wagtail.caseStudiesIndexPage.title}
        caseStudies={data.wagtail.caseStudies}
        contact={data.wagtail.contact}
        contactReasons={data.wagtail.contactReasons}
      />
    </Layout>
  )
}

export const query = graphql`
  query CaseStudiesQuery {
    wagtail {
      caseStudiesIndexPage {
        title
        pageTitle
        searchDescription
      }
      caseStudies {
        slug
        title
        client
        listingSummary
        tags: relatedServices {
          name
          slug
        }
        authors {
          name
          role
          personPage {
            slug
            image {
              ...iconImage
            }
          }
        }
        feedImage {
          ...fullImage
        }
        homepageImage {
          ...fullImage
        }
      }
      contact {
        ...contactSnippet
      }
      contactReasons {
        ...contactReasonsSnippet
      }
    }
  }
`

export const previewQuery = `
  query ($previewToken: String) {
    caseStudiesIndexPage(previewToken: $previewToken) {
      title
      pageTitle
      searchDescription
    }
    caseStudies {
      slug
      title
      client
      listingSummary
      tags: relatedServices {
        name
        slug
      }
      authors {
        name
        role
        personPage {
          slug
          image {
            ...iconImage
          }
        }
      }
      feedImage {
        ...fullImage
      }
      homepageImage {
        ...fullImage
      }
    }
    contact {
      ...contactSnippet
    }
    contactReasons {
      ...contactReasonsSnippet
    }
  }
`

CaseStudyListingContainer.propTypes = {
  data: PropTypes.object,
}

export default CaseStudyListingContainer
