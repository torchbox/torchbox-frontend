import React from 'react'

import { graphql } from 'gatsby'
import CaseStudy from './case-study'
import Layout from '../../components/layout'
import { authorDetails, postTags } from '../../utils/selectors'
import { caseStudiesUrl } from '../../utils/urls'

export default ({data}) => {
  console.log(data)
  const page = data.wagtail.caseStudies[0]
  console.log(authorDetails(page.authors))
  return (
    <Layout>
      <CaseStudy
        title={page.title}
        streamfield={page.body}
        author={authorDetails(page.authors)}
        tags={postTags(page.tags, caseStudiesUrl('#filter='))}
      />
    </Layout>
  )
}


export const query = graphql`
  query CaseStudyQuery($slug: String) {
    wagtail {
      caseStudies(slug: $slug) {
        title
        tags: relatedServices {
          name
          slug
        }
        authors {
          name
          personPage {
            slug
            image {
              ...iconImage
            }
          }
          role
        }
        body
      }
    }
  }
`
