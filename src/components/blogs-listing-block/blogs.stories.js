import React from 'react'
import { storiesOf } from '@storybook/react'

import Blogs from './blogs'

storiesOf('Landing Page', module).add('Blogs Listing Block', () => {
  return (
    <Blogs blogs={[
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
      { title: 'We’ve dropped Drupal.', authorName: 'Paul Vetch', authorRole: 'Client Services Director', authorAvatar: require('../../images/will.jpg') },
    ]} />
  )
})
