import React from 'react'
import PropTypes from 'prop-types'

import styles from './blog-listing.module.scss'
import TitleBlock from '../../components/title-block'
import StreamfieldBlock from '../../components/streamfield-block'
import Contact from '../../components/contact-detailed'
import safeGet from '../../utils/safeget'
import { getUniqueTagsFromPosts, postContainsTag, getCurrentFilterIndex } from '../../utils/tags'
import FilterTags from '../../components/filter-pills/filter-tags'
import BlogLink from '../../components/blog-link/blog-link'
import { blogsUrl } from '../../utils/urls'

export class BlogListingPage extends React.Component {
  state = { selectedTag: 0, currentLimit: 10 }

  static getDerivedStateFromProps(props) {
    const tags = [
      { label: 'All', href: blogsUrl() },
      ...getUniqueTagsFromPosts(props.blogs).map(tag => ({
        label: tag.name,
        href: blogsUrl(`#filter=${tag.slug}`),
        slug: tag.slug
      })),
    ]
    return ({
      tags,
      selectedTag: getCurrentFilterIndex(tags)
    })
  }

  render() {
    const { title, streamfield } = this.props
    const { selectedTag, currentLimit, tags = []} = this.state

    const listing = this.props.blogs
      .map(blog => {
        return {
          title: blog.title,
          tags: blog.tags,
          href: `/blogs/${blog.slug}`,
          datePublished: new Date(blog.date).getTime(),
          authorName: safeGet(blog, 'authors.0.name', ''),
          authorRole: safeGet(blog, 'authors.0.role', ''),
          authorAvatar: safeGet(blog, 'authors.0.personPage.image.src', ''),
        }
      })
      .filter(blog =>
        selectedTag === 0
          ? true
          : postContainsTag(blog.tags, tags[selectedTag].label)
      )

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <FilterTags
          className={styles.pageFilterTags}
          tags={tags}
          activeTag={this.state.selectedTag}
        />
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={streamfield}
        />

        <div className={styles.pageBlogListing}>
          {listing.slice(0, currentLimit).map(blog => (
            <BlogLink
              className={styles.pageBlogListingLink}
              href={blog.href}
              title={blog.title}
              datePublished={blog.datePublished}
              authorAvatar={blog.authorAvatar}
              authorName={blog.authorName}
              authorRole={blog.authorRole}
            />
          ))}
          {listing.length > currentLimit ? (
            <div className={styles.seeMore}>
              <a onClick={this.loadMoreBlogs}>See more blogs</a>
            </div>
          ) : null}
        </div>
        <Contact className={styles.pageContact} />
      </div>
    )
  }

  loadMoreBlogs = () =>
    this.setState({ currentLimit: this.state.currentLimit + 10 })
}

BlogListingPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  blogs: PropTypes.array,
  teasers: PropTypes.array,
}

BlogListingPage.defaultProps = {
  tags: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default BlogListingPage
