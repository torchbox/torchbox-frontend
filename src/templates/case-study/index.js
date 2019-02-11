import React from 'react'

import { graphql } from 'gatsby'
import CaseStudy from './case-study'
import Layout from '../../components/layout'
import { authorDetails, postTags } from '../../utils/selectors'
import { caseStudiesUrl } from '../../utils/urls'
import { safeGet } from '../../utils/safeget'

export default ({data}) => {
  let page = data.wagtail.caseStudies[0]
  let feedImageSrc = safeGet(page, 'feedImage.src.url', require('../../images/default-featured.png'))
  const body = ([
    { type: 'wide_image', value: { image: { src: feedImageSrc } } }
  ]).concat(page.body)

  return (
    <Layout>
      <CaseStudy
        client={page.client}
        title={page.title}
        streamfield={body}
        author={authorDetails(page.authors)}
        tags={postTags(page.tags, caseStudiesUrl('#filter='))}
      />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String) {
    wagtail {
      caseStudies(slug: $slug) {
        title
        client
        feedImage {
          ...fullImage
        }
        tags: relatedServices {
          name
          slug
        }
        authors {
          name
          personPage {
            role
            slug
            image {
              ...iconImage
            }
          }
        }
        body
      }
    }
  }
`
