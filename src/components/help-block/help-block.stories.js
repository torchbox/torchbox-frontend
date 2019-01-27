import React from 'react'
import { storiesOf } from '@storybook/react'

import HelpBlock from './help-block'
import Contact from '../contact/contact'

storiesOf('Components/Landing Page', module).add('Help block', () => {
  return (
    <HelpBlock
      title="{We make products fast} and transform the way your organisation works at the same time..."
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
      contactDetails={{
        title: "Get in touch about your project",
        email: "will@torchbox.com",
        number: "+44 (0) 7545 468483",
      }}
    />
  )
})
