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
