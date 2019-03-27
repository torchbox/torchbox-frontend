// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
// Components
import NotFoundPage from './404'

export default ({ data }) => {
    return <NotFoundPage contact={data.wagtail.contact} contactReasons={data.wagtail.contactReasons} />
}

export const query = graphql`
  query {
    wagtail {
      contact {
        ...contactSnippet
      }  
      contactReasons {
        ...contactReasonsSnippet
      }
    }
  }
`