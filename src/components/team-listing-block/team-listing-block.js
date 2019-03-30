// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Styles
import styles from './team-listing-block.module.scss'

const TeamListingBlock = ({ team, className }) => {
  return (
    <div className={[styles.block, className].join(' ')}>
      <div className={styles.blockContent}>
        <div className={styles.blockPersonList}>
          {team.map((person) => (
            <Link
              key={person.key}
              className={styles.blockPersonLink}
              to={person.href}
            >
              <img
                className={styles.blockPersonLinkAvatar}
                src={person.avatar}
                alt={person.alt}
              />
              <span className={styles.blockPersonLinkName}>{person.name}</span>
              <h2 className={styles.blockPersonLinkRole}>{person.role}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

TeamListingBlock.propTypes = {
  team: PropTypes.array,
  className: PropTypes.string,
}

TeamListingBlock.defaultProps = {
  className: '',
  team: [],
}

export default TeamListingBlock
