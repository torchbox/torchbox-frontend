// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import TeamListingBlock from './team-listing-block'

storiesOf('Components/Listing Pages', module).add('Team listing block', () => {
  return (
    <TeamListingBlock
      team={[
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
        {
          name: 'Will Heinemann',
          role: 'Head of New Business',
          avatar: require('@images/will.jpg'),
          href: '#',
        },
      ]}
    />
  )
})
