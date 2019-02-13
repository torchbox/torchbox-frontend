import React from 'react'

import { graphql } from 'gatsby'
import CulturePage from './culture-page'
import Layout from '../../components/layout'

export default ({ data }) => {
  const page = data.wagtail.culturePages[0]
  if (page) {
    return (
      <Layout theme={'dark--transparent'}>
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
        slug
        strapline
        intro
        body
        heroImage {
          ...fullImage
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
