import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'
import JobsListingPage from './jobs-listing'

export default () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query JobsQuery {
            wagtail {
              jobsIndexPage {
                jobs {
                  url
                  title
                  level
                  location
                }
              }
            }
          }
        `}
        render={data => {
          return <JobsListingPage
            title="Our work [on amazing digital things]."
            jobs={data.wagtail.jobsIndexPage.jobs}
          />
        }}
      />
    </Layout>
  )
}
