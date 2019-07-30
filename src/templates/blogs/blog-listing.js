// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import FilterTags from '@components/filter-tags/filter-tags'
import BlogLink from '@components/blog-link/blog-link'
// Utilities
import {
  getUniqueTagsFromPosts,
  postContainsTag,
  getCurrentFilterIndex,
} from '@utils/tags'
import { blogsUrl } from '@utils/urls'
import { blogListing } from '@utils/selectors'
// Styles
import styles from './blog-listing.module.scss'

export class BlogListingPage extends React.Component {
  state = { selectedTag: 0, currentLimit: 10 }

  static getDerivedStateFromProps(props) {
    const tags = [
      { label: 'All', href: blogsUrl() },
      ...getUniqueTagsFromPosts(props.blogs).map(tag => ({
        label: tag.name,
        href: blogsUrl(`#filter=${tag.slug}`),
        slug: tag.slug,
      })),
    ]
    return {
      tags,
      selectedTag: getCurrentFilterIndex(tags),
    }
  }

  render() {
    const { title, streamfield, blogs, contact, contactReasons } = this.props
    const { selectedTag, currentLimit, tags = [] } = this.state

    const listing = (blogs || [])
      .map(blogListing)
      .filter(blog =>
        selectedTag === 0
          ? true
          : postContainsTag(blog.tags, tags[selectedTag].label)
      )

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} contentPathField="title" />
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
          {listing.slice(0, currentLimit).map((blog, index) => (
            <BlogLink
              key={`blog-link-${index}`}
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
        <Contact className={styles.pageContact} {...contact} {...contactReasons} />
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
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
}

BlogListingPage.defaultProps = {
  tags: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default BlogListingPage
