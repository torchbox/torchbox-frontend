import qs from 'query-string'
import safeGet from '../utils/safeget'
import { blogsUrl, caseStudiesUrl } from './urls'

export const authorDetails = authors => ({
  name: safeGet(authors, '0.name', ''),
  role: safeGet(authors, '0.personPage.role', 'Past Employee'),
  avatar: safeGet(authors, '0.personPage.image.src.url', require('../images/default-avatar.png')) || require('../images/default-avatar.png'),
  slug: safeGet(authors, '0.personPage.slug', ''),
})

export const postTags = (tags, hrefPrefix = '') => tags
  .map(tag => ({
    label: tag.name,
    href: hrefPrefix + tag.slug,
  }))

export const blogListing = blog => ({
  title: blog.title,
  tags: blog.tags,
  description: blog.listingSummary,
  href: blogsUrl(blog.slug),
  datePublished: blog.date,
  authorRole: authorDetails(blog.authors).role,
  authorName: authorDetails(blog.authors).name,
  authorAvatar: authorDetails(blog.authors).avatar,
})

export const caseStudyListing = caseStudy => ({
  client: caseStudy.client,
  tags: caseStudy.tags,
  title: caseStudy.title,
  href: caseStudiesUrl(caseStudy.slug),
  description: caseStudy.listingSummary,
  image: safeGet(caseStudy, 'feedImage.src.url', require('../images/default-featured.png')),
  // image: 'http://localhost:8000/media/images/hq-5787.width-1280.jpg'
})
