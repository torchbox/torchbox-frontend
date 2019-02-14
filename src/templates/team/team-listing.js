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
    const { title, team } = this.props

    const listing = team
      .map(person => ({
        name: person.firstName + ' ' + person.lastName,
        role: person.role,
        avatar: person.image.src.url,
        href: teamUrl(person.slug),
        isSenior: person.isSenior,
      }))
      .sort(person => (person.isSenior ? -1 : 1))

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <TeamListingBlock className={styles.pageTeamListing} team={listing} />
        <Contact className={styles.pageContact} />
      </div>
    )
  }
}

TeamListingPage.propTypes = {
  title: PropTypes.string,
  team: PropTypes.array,
}

TeamListingPage.defaultProps = {
  team: [],
  teasers: [],
}

export default TeamListingPage
