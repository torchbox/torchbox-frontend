// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Components
import BlogLink from '@components/blog-link'
// Styles
import styles from './blogs.module.scss'

class BlogsBlock extends React.Component {
  render() {
    const {
      blogs,
      className,
      sectionTitle,
      listingUrl,
      showFeatured = true,
    } = this.props
    const featuredPost = blogs[0]

    return (
      <div className={[styles.block, className].join(' ')}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        <div className={styles.blockContent}>
          {showFeatured ? (
            <section className={styles.blockIntro}>
              <BlogLink
                featured={true}
                href={featuredPost.href}
                title={featuredPost.title}
                description={featuredPost.description}
                authorAvatar={featuredPost.authorAvatar}
                authorName={featuredPost.authorName}
                authorRole={featuredPost.authorRole}
              />
            </section>
          ) : null}

          <div className={styles.blockBlogList}>
            {(blogs || []).slice(showFeatured ? 1 : 0).map((blog, index) => (
              <BlogLink
                key={`blog-link-${index}`}
                href={blog.href}
                title={blog.title}
                authorAvatar={blog.authorAvatar}
                authorName={blog.authorName}
                authorRole={blog.authorRole}
              />
            ))}
          </div>

          {listingUrl ? (
            <div className={styles.seeMore}>
              <Link to={listingUrl}>See more blogs</Link>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

BlogsBlock.propTypes = {
  blogs: PropTypes.array,
  className: PropTypes.string,
  listingUrl: PropTypes.string,
  sectionTitle: PropTypes.string,
  showFeatured: PropTypes.bool,
}

BlogsBlock.defaultProps = {
  className: '',
  blogs: [],
  sectionTitle: 'Thinking',
}

export default BlogsBlock
