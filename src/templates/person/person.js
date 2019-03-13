// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import Blogs from '@components/blogs-listing-block'
import ParentPageLink from '@components/parent-page-link'
// Utilities
import { blogsUrl, teamUrl } from '@utils/urls'
// Styles
import styles from './person.module.scss'

class PersonPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: `${props.firstName + ' ' + props.lastName || ''} [${props.intro ||
        ''}]`,
      altTitle: `${props.firstName + ' ' + props.lastName ||
        ''} [${props.altIntro || ''}]`,
    }
  }

  render() {
    const { title, altTitle } = this.state
    const { firstName, role, avatar, biography, blogs, contact } = this.props

    return (
      <div className={styles.page}>
        <div className={styles.pageContainer}>
          <TitleBlock
            onMouseEnter={() =>
              this.setState({
                title: altTitle,
                altTitle: title,
              })
            }
            onMouseLeave={() =>
              this.setState({
                title: altTitle,
                altTitle: title,
              })
            }
            className={styles.pageTitle}
            title={this.state.title}
          />
          <span className={styles.pageRole}>{role}</span>
          <div className={styles.pageAvatar}>
            <img
              className={styles.pageAvatarIcon}
              src={require('@images/icons/frag.png')}
            />
            <img className={styles.pageAvatarImage} src={avatar} />
          </div>
        </div>
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={[{ type: 'paragraph', value: biography }]}
        />
        <Blogs
          className={styles.pageShowcase}
          sectionTitle={`More of ${firstName}'s thinking`}
          blogs={blogs}
          showFeatured={false}
          listingUrl={null}
        />
        <Contact className={styles.pageContact} {...contact} />
      </div>
    )
  }
}

PersonPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  intro: PropTypes.string,
  altIntro: PropTypes.string,
  avatar: PropTypes.string,
  biography: PropTypes.string,
  blogs: PropTypes.array,
  contact: PropTypes.object,
}

PersonPage.defaultProps = {
  tags: [],
  blogs: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default PersonPage
