import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './jobs-block.module.scss'
import Avatar from '../avatar/avatar'

class JobsBlock extends React.Component {
  render() {
    const { jobs, className, listingUrl, greetingImage } = this.props

    return (
      <div className={[styles.block, className].join(' ')}>
        <img className={styles.blockImage} src={greetingImage} />

        <div className={styles.blockContent}>
          <div className={styles.blockJobList}>
            {jobs.map((job, index) => (
              <a
                key={`job-link-${index}`}
                className={styles.blockJobLink}
                href={job.href}
                target="_blank "
              >
                <h3 className={styles.blockJobLinkTitle}>{job.title}</h3>
                <h4 className={styles.blockJobLinkLevel}>{job.level}</h4>
                <h5 className={styles.blockJobLinkLocation}>{job.location}</h5>
              </a>
            ))}
          </div>

          {listingUrl ? (
            <div className={styles.seeMore}>
              <Link to={listingUrl}>See more jobs</Link>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
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
  greetingImage: require('../../images/help-character.svg'),
}

export default JobsBlock
