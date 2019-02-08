import React from 'react'

import { graphql } from 'gatsby'
import CulturePage from './culture-page'
import Layout from '../../components/layout'

export default ({ data }) => {
  const page = data.wagtail.culturePages[0]
  console.log(page)
  return (
    <Layout darkTheme={true}>
      <CulturePage
        strapline={page.strapline}
        heroImage={page.heroImage.src.url}
        intro={page.intro}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      culturePages(slug: $slug) {
        slug
        strapline
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
      }
    }
  } 
`
