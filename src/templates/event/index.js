// Vendor Modules
import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import EventPage from './event'
import Layout from '@components/layout'
// Utils
import {authorDetails} from '@utils/selectors'

const EventPageContainer = ({ data }) => {
  const page = data.wagtail.eventsPages[0]
  return (
    <Layout seoTitle={page.pageTitle} seoDesc={page.searchDescription}>
      <EventPage
        title={page.title}
        strapline={page.strapline}
        body={page.body}
        hosts={authorDetails(page.hosts)}
        postRegistrationBody={page.postRegistrationBody}
        event={page.event}
        contact={page.contact}
        contactReasons={page.contactReasons}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      eventsPages(slug: $slug) {
        title
        pageTitle
        strapline
        body
        postRegistrationBody
        searchDescription
        hosts {
          name
          personPage {
            slug
            role
            image {
              ...iconImage
            }
          }
        }
        event {
          id
          eventType
          startTime
        }
        contact {
          ...contactSnippet
        }
        contactReasons {
          ...contactReasonsSnippet
        }
      }
    }
  }
`

export const previewQuery = `
  query($previewToken: String) {
    wagtail {
      eventsPages(previewToken: $slug) {
        title
        pageTitle
        searchDescription
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
      }
    }
  }
`

EventPageContainer.propTypes = {
  data: PropTypes.object,
}

export default EventPageContainer
