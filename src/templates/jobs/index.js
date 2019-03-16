// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import JobsListingPage from './jobs-listing'

const JobsListingContainer = ({ data }) => {
  const page = data.wagtail.jobsIndexPage
  return (
    <Layout>
      <JobsListingPage
        title="Our work [on amazing digital things]."
        jobs={page.jobs}
        contact={page.contact}
        contactReasons={page.contactReasons}
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
        contact {
          ...contactSnippet
        }
        contactReasons {
          ...contactReasonsSnippet
        }
      }
    }
  }
`

JobsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default JobsListingContainer
