import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import JobsListingPage from './jobs-listing'

export default ({ data }) => {
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
