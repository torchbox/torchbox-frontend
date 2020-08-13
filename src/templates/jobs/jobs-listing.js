// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import RichText from '@components/rich-text'
import Contact from '@components/contact-detailed'
import JobsBlock from '@components/jobs-listing-block/jobs-block'
// Styles
import styles from './jobs-listing.module.scss'

export class JobsListingPage extends React.Component {
  render() {
    const { title, intro, jobs, teasers, contact, contactReasons } = this.props

    const listing = jobs.map(job => {
      return {
        id: job.id,
        title: job.title,
        level: job.level,
        location: job.location,
        description: job.description,
        href: job.url,
      }
    })

    return (
      <div className={styles.page}>
        <TitleBlock
          className={styles.pageTitle}
          title={listing.length ? title : 'Sorry, [We have no jobs currently].'}
          contentPathField="title"
        />
        <div className={styles.pageIntro}>
          <RichText
            className={styles.pageIntroText}
            value={intro}
          />
        </div>
        <JobsBlock
          className={styles.pageJobListing}
          listingUrl={null}
          jobs={listing}
        />
        <Contact
          className={[styles.pageContact, styles.darkTheme].join(' ')}
          {...contact}
          {...contactReasons}
        />
      </div>
    )
  }
}

JobsListingPage.propTypes = {
  title: PropTypes.string,
  jobs: PropTypes.array,
  teasers: PropTypes.array,
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
}

JobsListingPage.defaultProps = {
  jobs: [],
  teasers: [],
}

export default JobsListingPage
