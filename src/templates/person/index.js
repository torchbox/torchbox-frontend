// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// Components
import PersonPage from './person'
import Layout from '../../components/layout'
// Utilities
import { blogListing } from '../../utils/selectors'

const PersonPageContainer = ({ data }) => {
  const person = data.wagtail.personPages[0]
  const blogs = (data.wagtail.blogPosts || []).map(blogListing)
  return (
    <Layout>
      <PersonPage
        firstName={person.firstName}
        lastName={person.lastName}
        role={person.role}
        intro={person.shortIntro}
        avatar={person.image.src.url}
        biography={person.biography}
        blogs={blogs}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      personPages(slug: $slug) {
        firstName
        lastName
        role
        shortIntro
        biography
        slug
        image {
          ...fullImage
        }
      }

      blogPosts(authorSlug: $slug, limit: 2) {
        title
        slug
        date
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
      }
    }
  }
`

PersonPageContainer.propTypes = {
  data: PropTypes.object,
}

export default PersonPageContainer
