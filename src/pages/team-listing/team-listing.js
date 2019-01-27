import React from 'react'
import PropTypes from 'prop-types'

import styles from './team-listing.module.scss'
import TitleBlock from '../../components/title-block'
import Contact from '../../components/contact-detailed'
import TeaserBlock from '../../components/teaser-block/teaser-block'
import Footer from '../../components/footer/footer'
import TeamListingBlock from '../../components/team-listing-block/team-listing-block'

export class TeamListingPage extends React.Component {
  render() {
    const { title, team, teasers } = this.props

    const listing = team.map(person => {
      return {
        name: person.firstName + ' ' + person.lastName,
        role: person.role,
        avatar: person.image.src,
        href: `/team/${person.slug}`,
      }
    })

    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <TeamListingBlock className={styles.pageTeamListing} team={listing} />
        <Contact className={styles.pageContact} />
        <TeaserBlock teasers={teasers} />
        <Footer />
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
