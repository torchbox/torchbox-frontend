import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './jobs-block.module.scss'
import Avatar from '../avatar/avatar'

const JobsBlock = ({ jobs, className, sectionTitle, listingUrl, greetingImage }) => {
  const featuredPost = jobs[0]
  return (
    <div className={[styles.block, className].join(' ')}>

      <img
        className={styles.blockImage}
        src={greetingImage}
      />

      <div className={styles.blockContent}>
        <div className={styles.blockJobList}>
          {jobs.slice(1).map(job => (
            <Link className={styles.blockJobLink} to={job.href}>
              <span className={styles.blockJobLinkTitle}>{job.title}</span>
              <h4 className={styles.blockJobLinkLevel}>{job.level}</h4>
              <h5 className={styles.blockJobLinkLocation}>{job.location}</h5>
            </Link>
          ))}
        </div>

        <div className={styles.seeMore}>
          <Link to={listingUrl}>See more jobs</Link>
        </div>

      </div>
    </div>
  )
}

JobsBlock.propTypes = {
  jobs: PropTypes.array,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired,
  greetingImage: PropTypes.string,
}

JobsBlock.defaultProps = {
  className: '',
  jobs: [],
  sectionTitle: 'Thinking',
  greetingImage: require('../../images/help-character.png')
}

export default JobsBlock
