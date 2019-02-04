import qs from 'query-string'
import safeGet from '../utils/safeget'

export const authorDetails = authors => ({
  name: safeGet(authors, '0.name' , ''),
  role: safeGet(authors, '0.role' , ''),
  avatar: safeGet(authors, '0.personPage.image.src.url' , ''),
  slug: safeGet(authors, '0.personPage.slug' , ''),
})

export const postTags = (tags, hrefPrefix = '') => tags
  .map(tag => ({
    label: tag.name,
    href: hrefPrefix + tag.slug
  }))
