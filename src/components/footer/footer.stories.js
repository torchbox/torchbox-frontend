import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './footer'

storiesOf('Shared Components', module).add('Footer', () => {
  return (
    <Footer links={[
      {
        label: 'Blog',
        href: '#'
      },
      {
        label: 'Work',
        href: '#'
      },
      {
        label: 'Team',
        href: '#'
      },
      {
        label: 'Privacy',
        href: '#'
      },
      {
        label: 'Cookies',
        href: '#'
      },
    ]}/>
  )
})
