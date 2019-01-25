import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import Tag from './tag'

storiesOf('Shared Components', module).add('Tag', () => {
  return (
    <divs
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
        borderRadius: 5,
      }}
    >
      <Tag label='Digital Products' onClick={action('Tag Pressed!')} />
    </divs>
  )
})
