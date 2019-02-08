export const caseStudiesUrl = (slug = '') => `/work/${slug}`
export const blogsUrl = (slug = '') => `/blogs/${slug}`
export const teamUrl  = (slug = '') =>  `/team/${slug}`


export const pageUrl = ({ type, slug }) => {
  switch(type) {
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

    default:
      return '/'
  }
}
