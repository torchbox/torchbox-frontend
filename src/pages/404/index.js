// Vendor Modules
import React from 'react'
import { graphql } from 'gatsby'
// Components
import NotFoundPage from './404'

export default ({ data }) => {
    const page = data.wagtail.notfoundPage
    return <NotFoundPage 
      strapline={page.strapline}
      background={page.backgroundImage.src.url}
      contact={page.contact} 
      contactReasons={page.contactReasons} />
}

export const query = graphql`
  query {
    wagtail {
      notfoundPage {
        strapline
        backgroundImage {
          ...maxImage
        }
        contact {
          ...contactSnippet
        }
        contactReasons {
          ...contactReasonsSnippet
        }
      }
    }
  }
`

export const previewQuery = `
  query($previewToken: String) {
    notfoundPage(previewToken: $previewToken) {
      strapline
      backgroundImage {
        ...maxImage
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
