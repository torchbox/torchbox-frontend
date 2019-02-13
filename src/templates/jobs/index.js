import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import JobsListingPage from './jobs-listing'

const JobsListingContainer = ({ data }) => {
  return (
    <Layout>
      <JobsListingPage
        title="Our work [on amazing digital things]."
        jobs={data.wagtail.jobsIndexPage.jobs}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagtail {
      jobsIndexPage {
        jobs {
          url
          title
          level
          location
        }
      }
    }
  }
`

JobsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default JobsListingContainer
