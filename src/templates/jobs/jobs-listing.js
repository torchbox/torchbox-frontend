// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import Contact from '@components/contact-detailed'
import JobsBlock from '@components/jobs-listing-block/jobs-block'
// Styles
import styles from './jobs-listing.module.scss'

export class JobsListingPage extends React.Component {
  render() {
    const { title, jobs, teasers, contact, contactReasons } = this.props

    const listing = jobs.map(job => {
      return {
        title: job.title,
        level: job.level,
        location: job.location,
        href: job.url,
      }
    })

    return (
      <div className={styles.page}>
        <TitleBlock
          className={styles.pageTitle}
          title={listing.length ? title : 'Sorry, [We have no jobs currently].'}
        />
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
