// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import BlogLink from './blog-link'

storiesOf('Components/Shared Components', module).add('BlogLink', () => {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
        width: 95,
        borderRadius: 40,
      }}
    >
      <BlogLink src={require('@images/will.jpg')} />
    </div>
  )
})
