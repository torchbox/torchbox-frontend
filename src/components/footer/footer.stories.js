// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import Footer from './footer'

storiesOf('Components/Shared Components', module).add('Footer', () => {
  return (
    <Footer
      links={[
        {
          label: 'Blog',
          href: '#',
        },
        {
          label: 'Work',
          href: '#',
        },
        {
          label: 'Team',
          href: '#',
        },
        {
          label: 'Privacy',
          href: '#',
        },
        {
          label: 'Cookies',
          href: '#',
        },
      ]}
    />
  )
})
