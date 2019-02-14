// Vendor Modules
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
// Components
import TeaserBlock from './teaser-block'
// Utilities
import { pageUrl } from '../../utils/urls'

const TeaserBlockContainer = ({ ignoreSlug }) => {
  return (
    <StaticQuery
      query={graphql`
        query TeaserQuery {
          wagtail {
            services {
              name
              slug
              description
              servicePage {
                type
                slug
              }
            }
          }
        }
      `}
      render={data => {
        const teasers = data.wagtail.services
          .filter(service => service.slug !== ignoreSlug)
          .slice(0, 2)
          .map(service => ({
            ...service,
            href: pageUrl(service.servicePage),
          }))
        return <TeaserBlock teasers={teasers} />
      }}
    />
  )
}

TeaserBlockContainer.propTypes = {
  ignoreSlug: PropTypes.string,
}

export default TeaserBlockContainer
