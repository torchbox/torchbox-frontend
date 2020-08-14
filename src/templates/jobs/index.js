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
        intro={page.intro}
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
        intro
        strapline
        pageTitle
        searchDescription

        jobs {
          id
          url
          title
          level
          location
          description
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
      intro
      strapline
      pageTitle
      searchDescription

      jobs {
        id
        url
        title
        level
        location
        description
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
