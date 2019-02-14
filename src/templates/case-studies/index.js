// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import CaseStudyListingPage from './case-study-listing'
import Layout from '@components/layout'

const CaseStudyListingContainer = ({ data }) => {
  return (
    <Layout>
      <CaseStudyListingPage
        title="Our work [on amazing digital things]."
        caseStudies={data.wagtail.caseStudies}
      />
    </Layout>
  )
}

export const query = graphql`
  query CaseStudiesQuery {
    wagtail {
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
    }
  }
`

CaseStudyListingContainer.propTypes = {
  data: PropTypes.object,
}

export default CaseStudyListingContainer
