// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import Layout from '@components/layout'
import TeamListingPage from './team-listing'

const TeamListingContainer = ({ data }) => {
  return (
    <Layout>
      <TeamListingPage
        title={data.wagtail.personIndexPage.strapline}
        team={data.wagtail.personPages}
        contact={data.wagtail.contact}
        contactReasons={data.wagtail.contactReasons}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    wagtail {
      personIndexPage {
        strapline
      }
      personPages {
        firstName
        lastName
        slug
        role
        isSenior
        image {
          ...largeIconImage
        }
      }
      contact {
        ...contactSnippet
      }
      contactReasons {
        ...contactReasonsSnippet
      }
    }
  }
`

TeamListingContainer.propTypes = {
  data: PropTypes.object,
}

export default TeamListingContainer
