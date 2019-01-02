import React from 'react'
import { storiesOf } from '@storybook/react'

import HelpBlock from './help-block'

storiesOf('Landing Page', module).add('Help Block', () => {
  return (
    <HelpBlock
      title="We can help you…"
      links={[
        { href: '#1', title: 'Understand your users' },
        { href: '#1', title: 'Kick start a product idea with a design sprint' },
        { href: '#1', title: 'Develop your product strategy and roadmap' },
        { href: '#1', title: 'Design and build lightweight apps and tools' },
        { href: '#1', title: 'Build a prototype (using the latest tech)' },
        {
          href: '#1',
          title: 'Build a product and change your culture in one quarter',
        },
        {
          href: '#1',
          title: 'Build a mission-critical enterprise digital service',
        },
      ]}
    />
  )
})
