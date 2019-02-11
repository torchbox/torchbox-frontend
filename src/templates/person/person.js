import React from 'react'
import PropTypes from 'prop-types'

import styles from './person.module.scss'
import TitleBlock from '../../components/title-block'
import StreamfieldBlock from '../../components/streamfield-block'
import Contact from '../../components/contact-detailed'
import { blogsUrl } from '../../utils/urls'
import Blogs from '../../components/blogs-listing-block'

const PersonPage = ({
  name,
  role,
  intro,
  avatar,
  biography,
  blogs
}) => (
  <div className={styles.page}>
    <div className={styles.pageContainer}>
      <TitleBlock className={styles.pageTitle} title={intro} />
      <div className={styles.pageAvatar}>
        <img className={styles.pageAvatarIcon} src={require('../../images/icons/frag.png')} />
        <img className={styles.pageAvatarImage} src={avatar} />
      </div>
    </div>
    <StreamfieldBlock
      className={styles.pageStreamfield}
      streamfield={[
        { type: 'paragraph', value: biography }
      ]}
    />
    <Blogs
      className={styles.pageShowcase}
      sectionTitle="More of our thinking"
      blogs={blogs}
      showFeatured={false}
      listingUrl={blogsUrl()}
    />
    <Contact className={styles.pageContact} />
  </div>
)

PersonPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
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
