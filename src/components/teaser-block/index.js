import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TeaserBlock from './teaser-block'
import { pageUrl } from '../../utils/urls'

const TeaserBlockContainer = () => {
  return (
    <StaticQuery
      query={graphql`
        query TeaserQuery {
          wagtail {
            services {
              name
              slug
              description
            }
          }
        }
      `}
      render={data => {
        const teasers = data.wagtail.services.slice(0, 2).map(service => ({
          ...service,
          href: pageUrl({
            type: 'ServicePage',
            slug: service.slug
          })
        }))
        return (
          <TeaserBlock teasers={teasers} />
        )
      }}
    />
  )
}

export default TeaserBlockContainer
