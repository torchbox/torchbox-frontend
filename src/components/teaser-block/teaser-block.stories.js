import React from 'react'
import { storiesOf } from '@storybook/react'

import TeaserBlock from './teaser-block'

storiesOf('Shared Components', module).add('Teaser block', () => {
  return (
    <TeaserBlock teasers={[
      {
        image: require('../../images/tbx-flame.svg'),
        title: ['Wagtail CMS', <br />, 'services'],
        description: 'For web builds with the Wagtail open source CMS',
        link: '#',
      },
      {
        image: require('../../images/tbx-flame.svg'),
        title: ['Data', <br />, 'marketing'],
        description: 'For our data driven digital marketing services',
        link: '#',
      },
    ]}/>
  )
})
