import React from 'react'
import PropTypes from 'prop-types'

import styles from './case-study-listing.module.scss'
import TitleBlock from '../../components/title-block'
import Contact from '../../components/contact-detailed'
import { getCurrentFilterIndex, getUniqueTagsFromPosts, postContainsTag } from '../../utils/tags'
import FilterTags from '../../components/filter-pills/filter-tags'
import CaseStudiesBlock from '../../components/case-studies-block/case-studies-block'
import { caseStudiesUrl } from '../../utils/urls'
import { caseStudyListing } from '../../utils/selectors'

export class CaseStudyListingPage extends React.Component {
  state = { selectedTag: 0, currentLimit: 10 }

  static getDerivedStateFromProps(props) {
    const tags = [
      { label: 'All', href: caseStudiesUrl() },
      ...getUniqueTagsFromPosts(props.caseStudies).map(tag => ({
        label: tag.name,
        href: caseStudiesUrl(`#filter=${tag.slug}`),
        slug: tag.slug
      })),
    ]
    return ({
      tags,
      selectedTag: getCurrentFilterIndex(tags)
    })
  }

  render() {
    const { title, caseStudies } = this.props
    const { selectedTag, currentLimit, tags = [] } = this.state

    let listing = []
    if (caseStudies) {
      listing = caseStudies
        .map(caseStudyListing)
        .filter(caseStudy =>
          selectedTag === 0
            ? true
            : postContainsTag(caseStudy.tags, tags[selectedTag].label)
        )
    }

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <FilterTags
          className={styles.pageFilterTags}
          tags={tags}
          activeTag={this.state.selectedTag}
        />
        <CaseStudiesBlock
          caseStudies={listing.slice(0, currentLimit)}
          sectionTitle={null}
          listingUrl={null}
        />
        {listing.length > currentLimit ? (
          <div className={styles.seeMore}>
            <a onClick={this.loadMoreBlogs}>See more blogs</a>
          </div>
        ) : null}
        <Contact className={styles.pageContact} />
      </div>
    )
  }

  loadMoreBlogs = () =>
    this.setState({ currentLimit: this.state.currentLimit + 10 })

}

CaseStudyListingPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  caseStudies: PropTypes.array,
  teasers: [],
}

CaseStudyListingPage.defaultProps = {
  tags: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default CaseStudyListingPage
