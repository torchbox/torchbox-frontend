// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import AuthorBlock from './author-block'

storiesOf('Components/Shared Components', module).add('Author Block', () => {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
        borderRadius: 5,
      }}
    >
      <AuthorBlock
        author={{
          avatar: require('@images/will.jpg'),
          name: 'Olly Willans',
          role: 'Creative Director',
        }}
        datePublished={Date.now()}
        readTime={7}
        tags={[
          { label: 'Digital Products', href: '#' },
          { label: 'Design Sprints', href: '#' },
          { label: 'Wagtail', href: '#' },
        ]}
      />
    </div>
  )
})
