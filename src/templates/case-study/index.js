import React from 'react'

import { graphql } from 'gatsby'
import CaseStudy from './case-study'
import Layout from '../../components/layout'
import { authorDetails, postTags } from '../../utils/selectors'
import { caseStudiesUrl } from '../../utils/urls'
import { safeGet } from '../../utils/safeget'
import PropTypes from 'prop-types'

const CaseStudyContainer = ({ data }) => {
  const page = data.wagtail.caseStudies[0]

  const homepageImageSrc = safeGet(page, 'homepageImage.src.url', null)
  const feedImageSrc = safeGet(
    page,
    'feedImage.src.url',
    require('../../images/default-featured.png')
  )

  const body = [
    {
      type: 'wide_image',
      value: { image: { src: homepageImageSrc || feedImageSrc } },
    },
  ].concat(page.body)

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
        homepageImage {
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
        contact {
          ...contactSnippet
        }
      }
    }
  }
`

CaseStudyContainer.propTypes = {
  data: PropTypes.object,
}

export default CaseStudyContainer
