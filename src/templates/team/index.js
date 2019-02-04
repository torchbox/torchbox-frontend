import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import TeamListingPage from './team-listing'

export default ({ data }) => {
  return (
    <Layout>
      <TeamListingPage
        title={data.wagtail.personIndexPage.strapline}
        team={data.wagtail.personPages}
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
        image {
          ...largeIconImage
        }
      }
    }
  }
`
