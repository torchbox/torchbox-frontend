import React from 'react'

import { graphql } from 'gatsby'
import PersonPage from './person'
import Layout from '../../components/layout'

export default ({ data }) => {
  const person = data.wagtail.personPages[0]
  return (
    <Layout>
      <PersonPage
        name={`${person.firstName} ${person.lastName}`}
        role={person.role}
        intro={person.intro}
        avatar={person.image.src.url}
        biography={person.biography}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      servicePages(serviceSlug: "digital-products") {
        title
        strapline
        intro

        headingForKeyPoints
        keyPoints {
          text
        }

        contact {
          name
          emailAddress
          phoneNumber
          image {
            src
          }
        }

        clientLogos {
          image {
            src
          }
        }

        usaClientLogos {
          image {
            src
          }
        }

        testimonials {
          name
          quote
          role
        }

        blogPosts {
          title
          listingSummary
          authors {
            name
            personPage {
              role
              image {
                src
              }
            }
          }
        }

        service {
          name
          slug
        }
      }
    }
  }
`
