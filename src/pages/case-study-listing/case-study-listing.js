import React from 'react'
import PropTypes from 'prop-types'

import styles from './case-study-listing.module.scss'
import TitleBlock from '../../components/title-block'
import Contact from '../../components/contact-detailed'
import { getUniqueTagsFromPosts, postContainsTag } from '../../utils/tags'
import FilterTags from '../../components/filter-pills/filter-tags'
import CaseStudiesBlock from '../../components/case-studies-block/case-studies-block'
import TeaserBlock from '../../components/teaser-block/teaser-block'
import Footer from '../../components/footer/footer'

export class CaseStudyListingPage extends React.Component {
  state = { selectedTag: 0 }

  render() {
    const { title, streamfield, caseStudies, teasers } = this.props
    const { selectedTag } = this.state

    const tags = [
      { label: 'All', href: '#' },
      ...getUniqueTagsFromPosts(caseStudies).map(tag => ({
        label: tag.name,
        href: '#',
      })),
    ]

    const listing = this.props.caseStudies
      .map(caseStudy => {
        return {
          client: 'BLAH BLAH BLAH',
          tags: caseStudy.tags,
          title: caseStudy.title,
          description: caseStudy.listingSummary,
          image:
            'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs3.jpg',
        }
      })
      .filter(caseStudy =>
        selectedTag === 0
          ? true
          : postContainsTag(caseStudy.tags, tags[selectedTag].label)
      )

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <FilterTags
          className={styles.pageFilterTags}
          tags={tags}
          activeTag={this.state.selectedTag}
          onChange={(tag, index) => this.setState({ selectedTag: index })}
        />
        <CaseStudiesBlock
          caseStudies={listing}
          sectionTitle={null}
          listingUrl={null}
        />
        <Contact className={styles.pageContact} />
        <TeaserBlock teasers={teasers} />
        <Footer />
      </div>
    )
  }
}

CaseStudyListingPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.number,
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
