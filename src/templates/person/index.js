// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// Components
import PersonPage from './person'
import Layout from '@components/layout'
// Utilities
import { blogListing } from '@utils/selectors'

const PersonPageContainer = ({ data }) => {
  const person = data.wagtail.personPages[0]
  const blogs = (data.wagtail.blogPosts || []).map(blogListing)
  return (
    <Layout
      seoTitle={person.pageTitle}
      seoDesc={person.searchDescription}
      twitterImage={person.twitterImage}
      facebookImage={person.facebookImage}
    >
      <PersonPage
        firstName={person.firstName}
        lastName={person.lastName}
        role={person.role}
        intro={person.shortIntro}
        altIntro={person.altShortIntro}
        avatar={person.image.src.url}
        alt={person.image.alt}
        biography={person.biography}
        blogs={blogs}
        contact={person.contact}
        contactReasons={person.contactReasons}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      personPages(slug: $slug) {
        pageTitle
        searchDescription
        facebookImage: searchImage {
          ...facebookImage
        }
        twitterImage: searchImage {
          ...twitterImage
        }
        firstName
        lastName
        role
        shortIntro
        altShortIntro
        biography
        slug
        image {
          ...fullImage
        }
        contact {
          ...contactSnippet
        }
        contactReasons {
          ...contactReasonsSnippet
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

export const previewQuery = `
  query($previewToken: String, $slug: String) {
    personPages(previewToken: $previewToken) {
      pageTitle
      firstName
      lastName
      role
      shortIntro
      altShortIntro
      biography
      slug
      image {
        ...fullImage
      }
      contact {
        ...contactSnippet
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
`

PersonPageContainer.propTypes = {
  data: PropTypes.object,
}

export default PersonPageContainer
