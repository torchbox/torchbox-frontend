// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import JobsListingPage from './jobs-listing'

const JobsListingContainer = ({ data }) => {
  return (
    <Layout seoTitle={data.wagtail.jobsIndexPage.pageTitle}>
      <JobsListingPage
        title={data.wagtail.jobsIndexPage.title}
        jobs={data.wagtail.jobsIndexPage.jobs}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagtail {
      jobsIndexPage {
        title
        pageTitle

        jobs {
          url
          title
          level
          location
        }
        contact {
          ...contactSnippet
        }
      }
    }
  }
`

JobsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default JobsListingContainer
