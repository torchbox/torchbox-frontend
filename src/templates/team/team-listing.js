// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import Contact from '@components/contact-detailed'
import TeamListingBlock from '@components/team-listing-block'
// Utilities
import { teamUrl } from '@utils/urls'
// Styles
import styles from './team-listing.module.scss'

export class TeamListingPage extends React.Component {
  render() {
    const { title, team, contact, contactReasons } = this.props

    /* 
     * Quick hack to stop the list being rendered during static build as the React diffing algorithm is having
     * issues replacing the static html (from Gatsby build) with dynamic html (from vanilla React) when this component
     * is rebuilt in runtime. The diffing messes up the ordering so the images and text don't match. Need someone to look
     * at this, my brain goes immeditetly to conflicting fiber node keys but that doesn't seem to be the case... _weird_ :/
     */
    let listing = []
    if (typeof window != `undefined`) {
      listing = listing.concat(team)
        .map(person => ({
          key: `person-${person.firstName}-${person.lastName}`,
          name:`${person.firstName} ${person.lastName}`,
          role: person.role,
          avatar: person.image.src.url,
          alt: person.image.alt,
          href: teamUrl(person.slug),
          isSenior: person.isSenior,
        }))
        .sort(person => (person.isSenior ? -1 : 1))
    }

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <TeamListingBlock className={styles.pageTeamListing} team={listing} />
        <Contact className={styles.pageContact} {...contact} {...contactReasons} />
      </div>
    )
  }
}

TeamListingPage.propTypes = {
  title: PropTypes.string,
  team: PropTypes.array,
  contact: PropTypes.object,
}

TeamListingPage.defaultProps = {
  team: [],
  teasers: [],
}

export default TeamListingPage
