// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
// Components
import ServicePageContainer from '@templates/service'

export const query = graphql`
  query($slug: String) {
    wagtail {
      subServicePages(slug: $slug) {
        title
        pageTitle
        theme
        strapline
        intro
        greetingImageType

        keyPointsSectionTitle
        headingForKeyPoints
        keyPoints {
          text
          linkedPage {
            type
            slug
          }
        }

        contact {
          ...contactSnippet
        }

        testimonialsSectionTitle
        clientLogos {
          image {
            ...quarterImage
          }
        }
        usaClientLogos {
          image {
            ...quarterImage
          }
        }
        testimonials {
          name
          quote
          role
        }

        useProcessBlockImage
        processSectionTitle
        processes {
          title
          description
          pageLinkLabel
          pageLink {
            type
            slug
          }
        }

        caseStudiesSectionTitle
        caseStudies(limit: 4) {
          title
          slug
          client
          listingSummary
          feedImage {
            ...fullImage
          }
          homepageImage {
            ...fullImage
          }
        }

        blogsSectionTitle
        blogPosts(limit: 5) {
          title
          slug
          listingSummary
          authors {
            name
            personPage {
              role
              image {
                ...iconImage
              }
            }
          }
        }

        service {
          name
          slug
          servicePage {
            type
            slug
          }
        }
      }
    }
  }
`

export const previewQuery = `
    query($previewToken: String) {
        subServicePages(previewToken: $previewToken) {
            title
            pageTitle
            theme
            strapline
            intro
            greetingImageType

            keyPointsSectionTitle
            headingForKeyPoints
            keyPoints {
                text
                linkedPage {
                    type
                    slug
                }
            }

            contact {
                ...contactSnippet
            }

            testimonialsSectionTitle
            clientLogos {
                image {
                    ...quarterImage
                }
            }
            usaClientLogos {
                image {
                    ...quarterImage
                }
            }
            testimonials {
                name
                quote
                role
            }

            useProcessBlockImage
            processSectionTitle
            processes {
                title
                description
                pageLinkLabel
                pageLink {
                    type
                    slug
                }
            }

            caseStudiesSectionTitle
            caseStudies(limit: 4) {
                title
                slug
                client
                listingSummary
                feedImage {
                    ...fullImage
                }
                homepageImage {
                    ...fullImage
                }
            }

            blogsSectionTitle
            blogPosts(limit: 5) {
                title
                slug
                listingSummary
                authors {
                    name
                    personPage {
                        role
                        image {
                            ...iconImage
                        }
                    }
                }
            }

            service {
                name
                slug
                servicePage {
                    type
                    slug
                }
            }
        }
    }
`

export default ServicePageContainer
