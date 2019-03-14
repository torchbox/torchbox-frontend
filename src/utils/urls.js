export const caseStudiesUrl = (slug = '') => `/work/${slug}`
export const blogsUrl = (slug = '') => `/blogs/${slug}`
export const teamUrl = (slug = '') => `/team/${slug}`
export const jobsUrl = (slug = '') => `/jobs/${slug}`
export const serviceUrl = (slug = '', parentServiceSlug = null) => {
  if (parentServiceSlug) {
    return `${parentServiceSlug}/${slug}`
  } else {
    switch (slug) {
      case 'digital-products':
        return `/`
      default:
        return slug
    }
  }
}

export const pageUrl = page => {
  if (page) {
    const { type, slug, serviceSlug } = page
    switch (type) {
      case 'HomePage':
        return '/'

      case 'WorkPage':
        return caseStudiesUrl(slug)

      case 'WorkIndexPage':
        return caseStudiesUrl()

      case 'BlogPage':
        return blogsUrl(slug)

      case 'BlogIndexPage':
        return blogsUrl()

      case 'PersonIndexPage':
        return teamUrl()

      case 'PersonPage':
        return teamUrl(slug)

      case 'JobIndexPage':
        return jobsUrl()

      case 'JobPage':
        return jobsUrl()

      case 'ServicePage':
        return serviceUrl(slug)

      case 'SubServicePage':
        return serviceUrl(slug, serviceSlug)

      default:
        return '/'
    }
  }
  return '/'
}
