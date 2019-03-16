// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import CulturePage from './culture-page'

const CulturePageContainer = ({ data }) => {
  const page = data.wagtail.culturePages[0]
  if (page) {
    return (
      <Layout theme={'dark--transparent'} seoTitle={page.pageTitle}>
        <CulturePage
          strapline={page.strapline}
          heroImage={page.heroImage.src.url}
          intro={page.intro}
          links={page.links}
          body={page.body}
          contact={page.contact}
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
      }
    }
  }
`

CulturePageContainer.propTypes = {
  data: PropTypes.object,
}

export default CulturePageContainer
