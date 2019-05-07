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

const CaseStudyContainer = ({ pageContext, data }) => {
  const page = data.wagtail.caseStudies[0]
  const caseStudies = data.wagtail.caseStudies[0].relatedCaseStudies.map(caseStudyListing)

  const homepageImageSrc = safeGet(page, 'homepageImage.src.url', null)
  const feedImageSrc = safeGet(
    page,
    'feedImage.src.url',
    require('@images/default-featured.png')
  )

  const body = [
    {
      type: 'wide_image',
      value: {
        image: {
          src: homepageImageSrc || feedImageSrc,
          alt: page.homepageImage.alt || page.feedImage.src
        }
      },
    },
  ].concat(page.body)

  return (
    <Layout
      seoTitle={page.pageTitle}
      seoDesc={page.searchDescription}
      facebookImage={page.facebookImage}
      twitterImage={page.twitterImage}
    >
      <CaseStudy
        client={page.client}
        title={page.title}
        streamfield={body}
        author={authorDetails(page.authors)}
        tags={postTags(page.tags, caseStudiesUrl('#filter='))}
        contact={page.contact}
        contactReasons={page.contactReasons}
        readTime={readTime(page.bodyWordCount) || 0}
        caseStudies={caseStudies}
      />
    </Layout>
  )
}

CaseStudyContainer.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      caseStudies(slug: $slug) {
        title
        pageTitle
        searchDescription
        facebookImage: searchImage {
          ...facebookImage
        }
        twitterImage: searchImage {
          ...twitterImage
        }
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


        relatedCaseStudies(limit: 4) {
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
  }
`

export const previewQuery = `
  query($previewToken: String) {
    caseStudies(previewToken: $previewToken) {
      title
      pageTitle
      searchDescription
      facebookImage: searchImage {
        ...facebookImage
      }
      twitterImage: searchImage {
        ...twitterImage
      }
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


      relatedCaseStudies(limit: 4) {
        slug
        title
        client
        listingSummary
        tags: relatedServices {
          name
          slug
        }
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

export default CaseStudyContainer
