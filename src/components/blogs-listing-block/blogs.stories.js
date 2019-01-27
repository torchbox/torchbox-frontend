import React from 'react'
import { storiesOf } from '@storybook/react'

import Blogs from './blogs'

storiesOf('Components/Landing Page', module).add('Blog Listing block', () => {
  return (
    <Blogs
      listingUrl={'#'}
      blogs={[
      { title: 'We’ve dropped Drupal (Featured).', description: 'From tomorrow, score every meeting. Score it out of ten at the end of the meeting. Not just you, all participants. Do it for client meetings too. Nothing below a score of eight counts as a good meeting.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
    ]} />
  )
})
