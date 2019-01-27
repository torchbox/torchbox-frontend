export const postContainsTag = (tags, tagName) => {
  let tagExists = false
  tags.map(existingTag => {
    tagExists = (tagExists)
      ? true
      : existingTag.name === tagName
  })
  return tagExists
}

export const getUniqueTagsFromPosts = posts => {
  let tags = []
  posts.map(blog => (blog.tags || []).map(tag => {
    let tagExists = postContainsTag(tags, tag.name)
    if(!tagExists) {
      tags.push(tag)
    }
  }))
  return tags
}
