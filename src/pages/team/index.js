import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'
import TeamListingPage from './team-listing'

export default () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query TeamListingQuery {
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
        `}
        render={data => {
          return <TeamListingPage
            title={data.wagtail.personIndexPage.strapline}
            team={data.wagtail.personPages}
          />
        }}
      />
    </Layout>
  )
}
