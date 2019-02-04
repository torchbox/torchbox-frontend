import qs from 'query-string'

export const postContainsTag = (tags, tagName) => {
  let tagExists = false
  tags.map(existingTag => {
    tagExists = tagExists ? true : existingTag.name === tagName
  })
  return tagExists
}

export const getUniqueTagsFromPosts = posts => {
  let tags = []
  posts.map(blog =>
    (blog.tags || []).map(tag => {
      let tagExists = postContainsTag(tags, tag.name)
      if (!tagExists) {
        tags.push(tag)
      }
      return tagExists
    })
  )
  return tags
}

export const getCurrentFilterIndex = tags => {
  const { filter } = qs.parse(window.location.hash)
  let selectedIndex = 0;
  if (tags && filter) {
    tags.map((tag, index) => {
      console.log(tag.slug, tag.slug === filter, index)
      if (tag.slug === filter) {
        selectedIndex = index
      }
    })
  }
  return selectedIndex
}

