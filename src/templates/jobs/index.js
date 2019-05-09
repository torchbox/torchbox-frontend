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
    <Layout
      seoTitle={page.pageTitle}
      seoDesc={page.searchDescription}>
      <JobsListingPage
        title={page.strapline}
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
        title
        strapline
        pageTitle
        searchDescription

        jobs {
          id
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

export const previewQuery = `
  query($previewToken: String) {
    jobsIndexPage(previewToken: $previewToken) {
      title
      strapline
      pageTitle
      searchDescription

      jobs {
        id
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
`

JobsListingContainer.propTypes = {
  data: PropTypes.object,
}

export default JobsListingContainer
