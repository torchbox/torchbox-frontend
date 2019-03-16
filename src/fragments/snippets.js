// Vendor Modules
import { graphql } from 'gatsby'

export const contactSnippet = graphql`
  fragment contactSnippet on Wagtail_ContactObjectType {
    name
    role
    emailAddress
    phoneNumber
    image {
      ...iconImage
    }
  }
`

export const contactReasonsSnippet = graphql`
  fragment contactReasonsSnippet on Wagtail_ContactReasonsObjectType {
    heading
    reasons {
      title
      description
    }
  }
`
