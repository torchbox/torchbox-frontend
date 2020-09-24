// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import AuthorBlock from '@components/author-block'
import StreamfieldBlock from '@components/streamfield-block'
import CaseStudiesBlock from '@components/case-studies-block'
import Contact from '@components/contact-detailed'
// Utilities
import { caseStudiesFilterUrl } from '@utils/urls'
// Styles
import styles from './case-study.module.scss'

const CaseStudyPage = ({
  title,
  client,
  author,
  tags,
  readTime,
  streamfield,
  caseStudies,
  serviceSlug,
  teasers,
  contact,
  contactReasons,
}) => (
  <div className={styles.page}>
    <div className={styles.pageClientContainer}>
      <span className={styles.pageClient}>{client}</span>
    </div>
    <TitleBlock
      className={styles.pageTitle}
      title={title}
      innerPage={true}
      contentPathField="title"
    />
    <AuthorBlock
      className={styles.pageAuthor}
      author={author}
      tags={tags}
      readTime={readTime}
    />
    <StreamfieldBlock
      className={styles.pageStreamfield}
      streamfield={streamfield}
      contentPathField="body"
    />
    <AuthorBlock className={styles.pageAuthor} author={author} tags={tags} />
    <CaseStudiesBlock
      className={styles.pageShowcase}
      sectionTitle="More of our work"
      caseStudies={caseStudies}
      listingUrl={caseStudiesFilterUrl(serviceSlug)}
    />
    <Contact className={styles.pageContact} {...contact} {...contactReasons} />
  </div>
)

CaseStudyPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  readTime: PropTypes.number,
  client: PropTypes.string,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  caseStudies: PropTypes.array,
  teasers: PropTypes.array,
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
  serviceSlug: PropTypes.string,
}

CaseStudyPage.defaultProps = {
  tags: [],
  streamfield: [],
  caseStudies: [],
  className: '',
  teasers: [],
}

export default CaseStudyPage
