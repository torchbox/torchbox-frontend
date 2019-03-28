// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import StandardPage from './standard'

const StandardPageContainer = ({ data }) => {
  return (
    <Layout
      seoTitle={data.wagtail.standardPages[0].pageTitle}
      seoDesc={data.wagtail.standardPages[0].searchDescription}
    >
      <StandardPage
        title={data.wagtail.standardPages[0].title}
        body={data.wagtail.standardPages[0].body}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      standardPages(slug: $slug) {
        slug
        title
        pageTitle
        searchDescription
        body
        contact {
          ...contactSnippet
        }
      }
    }
  }
`

export const previewQuery = `
  query($previewToken: String) {
    standardPages(previewToken: $previewToken) {
      slug
      title
      pageTitle
      searchDescription
      body
      contact {
        ...contactSnippet
      }
    }
  }
`

StandardPageContainer.propTypes = {
  data: PropTypes.object,
}

export default StandardPageContainer
