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
      personPages(slug: $slug) {
        firstName
        lastName
        role
        intro
        biography
        slug
        image {
          ...fullImage
        } 
      }
    }
  }
`
