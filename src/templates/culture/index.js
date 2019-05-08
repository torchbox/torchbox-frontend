// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import CulturePage from './culture-page'

const CulturePageContainer = ({ data, location }) => {
  const page = data.wagtail.culturePages[0]
  if (page) {
    return (
      <Layout
        theme={'dark--transparent'}
        seoTitle={page.pageTitle}
        seoDesc={page.searchDescription}
        location={location}
      >
        <CulturePage
          strapline={page.strapline}
          straplineVisible={page.straplineVisible}
          heroImage={page.heroImage.src.url}
          intro={page.intro}
          links={page.links}
          body={page.body}
          contact={page.contact}
          contactReasons={page.contactReasons}
        />
      </Layout>
    )
  }
  return null
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      culturePages(slug: $slug) {
        pageTitle
        searchDescription
        slug
        strapline
        straplineVisible
        intro
        body
        heroImage {
          ...maxImage
        }
        links {
          title
          description
          link {
            type
            slug
          }
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
    culturePages(previewToken: $previewToken) {
      pageTitle
      searchDescription
      slug
      strapline
      intro
      body
      heroImage {
        ...maxImage
      }
      links {
        title
        description
        link {
          type
          slug
        }
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

CulturePageContainer.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default CulturePageContainer
