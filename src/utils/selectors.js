import qs from 'query-string'
import safeGet from '../utils/safeget'

export const authorDetails = authors => ({
  name: authors[0].name,
  role: authors[0].role,
  avatar: authors[0].personPage.image.src.url,
  slug: authors[0].personPage.slug
})

export const postTags = (tags, hrefPrefix = '') => tags
  .map(tag => ({
    label: tag.name,
    href: hrefPrefix + tag.slug
  }))
