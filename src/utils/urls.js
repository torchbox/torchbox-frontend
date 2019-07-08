export const caseStudiesUrl = (slug = '') => `/work/${slug}/`
export const caseStudiesFilterUrl = filter => {
  if (!filter) {
    return caseStudiesUrl()
  }
  return `/work/#filter=${filter}`
};
export const blogsUrl = (slug = '') => {
  if (slug) {
    return `/blog/${slug}/`;
  }

  return '/blog/';
};
export const blogsFilterUrl = filter => {
  if (!filter) {
    return blogsUrl()
  }
  return `/blog/#filter=${filter}`
};
export const teamUrl = (slug = '') => {
  if (slug) {
    return `/team/${slug}/`;
  }

  return '/team/';
};
export const jobsUrl = (slug = '') => {
  if (slug) {
    return `/jobs/${slug}/`;
  }

  return '/jobs/';
};

export const serviceUrl = (slug = '', parentServiceSlug = null) => {
  if (parentServiceSlug) {
    return `/${parentServiceSlug}/${slug}/`
  } else {
    return `/${slug}/`
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

export const removeSlashes = url => url.replace(/\//g, '')
