// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '../../components/title-block'
import StreamfieldBlock from '../../components/streamfield-block'
import Contact from '../../components/contact-detailed'
import Blogs from '../../components/blogs-listing-block'
// Utilities
import { blogsUrl } from '../../utils/urls'
// Styles
import styles from './person.module.scss'

const PersonPage = ({
  firstName,
  lastName,
  role,
  intro,
  avatar,
  biography,
  blogs,
}) => (
  <div className={styles.page}>
    <div className={styles.pageContainer}>
      <TitleBlock
        className={styles.pageTitle}
        title={`${firstName + ' ' + lastName || ''} [${intro || ''}]`}
      />
      <div className={styles.pageAvatar}>
        <img
          className={styles.pageAvatarIcon}
          src={require('../../images/icons/frag.png')}
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
    <Contact className={styles.pageContact} />
  </div>
)

PersonPage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  role: PropTypes.string,
  intro: PropTypes.string,
  avatar: PropTypes.string,
  biography: PropTypes.string,
  blogs: PropTypes.array,
}

PersonPage.defaultProps = {
  tags: [],
  blogs: [],
  streamfield: [],
  caseStudies: [],
  teasers: [],
}

export default PersonPage
