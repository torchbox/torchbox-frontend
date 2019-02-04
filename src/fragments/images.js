import { graphql } from 'gatsby'

export const iconImage = graphql`
  fragment iconImage on Wagtail_ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
  }
`

export const largeIconImage = graphql`
  fragment largeIconImage on Wagtail_ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
  }
`

export const fullImage = graphql`
  fragment fullImage on Wagtail_ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
  }
`
