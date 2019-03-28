// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import StandardPage from './standard'

const StandardPageContainer = ({ data }) => {
  const page = data.wagtail.standardPages[0]
  return (
    <Layout
      seoTitle={page.pageTitle}
      seoDesc={page.searchDescription}>
      <StandardPage
        title={page.title}
        body={page.body}
        contact={page.contact}
        contactReasons={page.contactReasons}
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
        contactReasons{
          ...contactReasonsSnippet
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
      contactReasons{
        ...contactReasonsSnippet
      }
    } 
  }
`

StandardPageContainer.propTypes = {
  data: PropTypes.object,
}

export default StandardPageContainer
