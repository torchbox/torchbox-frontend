import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'
import CaseStudyListingPage from './case-study-listing'

export default () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query CaseStudiesQuery {
            wagtail {
              caseStudies {
                slug
                title
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
              }
            }
          }
        `}
        render={data => {
          return <CaseStudyListingPage
            title="Our work [on amazing digital things]."
            caseStudies={data.wagtail.caseStudies}
          />
        }}
      />
    </Layout>
  )
}
