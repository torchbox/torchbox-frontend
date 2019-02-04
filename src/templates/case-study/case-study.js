import React from 'react'
import PropTypes from 'prop-types'

import styles from './case-study.module.scss'
import TitleBlock from '../../components/title-block'
import AuthorBlock from '../../components/author-block'
import StreamfieldBlock from '../../components/streamfield-block'
import CaseStudiesBlock from '../../components/case-studies-block'
import Contact from '../../components/contact-detailed'
import { caseStudiesUrl } from '../../utils/urls'

const CaseStudyPage = ({
  title,
  author,
  tags,
  readTime,
  streamfield,
  caseStudies,
  teasers,
}) => (
  <div className={styles.page}>
    <TitleBlock className={styles.pageTitle} title={title} />
    <AuthorBlock
      className={styles.pageAuthor}
      author={author}
      tags={tags}
      readTime={readTime}
    />
    <StreamfieldBlock
      className={styles.pageStreamfield}
      streamfield={streamfield}
    />
    <AuthorBlock className={styles.pageAuthor} author={author} tags={tags} />
    <CaseStudiesBlock
      className={styles.pageShowcase}
      sectionTitle="More of our work"
      caseStudies={caseStudies}
      listingUrl={caseStudiesUrl()}
    />
    <Contact className={styles.pageContact} />
  </div>
)

CaseStudyPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  caseStudies: PropTypes.array,
  teasers: PropTypes.array,
}

CaseStudyPage.defaultProps = {
  tags: [],
  streamfield: [],
  caseStudies: [],
  className: '',
  teasers: [],
}

export default CaseStudyPage
