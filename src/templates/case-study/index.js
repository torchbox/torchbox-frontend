// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import CaseStudy from './case-study'
// Utilities
import { caseStudiesUrl } from '@utils/urls'
import { safeGet } from '@utils/safeget'
import {
  authorDetails,
  postTags,
  readTime,
  caseStudyListing,
} from '@utils/selectors'

const CaseStudyContainer = ({ data }) => {
  const page = data.wagtail.caseStudies[0]
  let extraCaseStudies = data.wagtail.extraCaseStudies

  if (extraCaseStudies) {
    // Limit done client side == bad (Karl to fix his limiting on BE)
    extraCaseStudies = extraCaseStudies.map(caseStudyListing).slice(0, 4)
  }

  const homepageImageSrc = safeGet(page, 'homepageImage.src.url', null)
  const feedImageSrc = safeGet(
    page,
    'feedImage.src.url',
    require('@images/default-featured.png')
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
        contact={page.contact}
        contactReasons={page.contactReasons}
        readTime={readTime(page.bodyWordCount) || 0}
        caseStudies={extraCaseStudies}
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
        bodyWordCount
        contact {
          ...contactSnippet
        }
        contactReasons {
          ...contactReasonsSnippet
        }
      }

      extraCaseStudies: caseStudies {
        slug
        title
        client
        listingSummary
        authors {
          name
          role
          personPage {
            slug
            image {
              ...iconImage
            }
          }
        }
        feedImage {
          ...fullImage
        }
        homepageImage {
          ...fullImage
        }
      }
    }
  }
`

CaseStudyContainer.propTypes = {
  data: PropTypes.object,
}

export default CaseStudyContainer
