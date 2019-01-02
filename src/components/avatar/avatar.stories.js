import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatar from './avatar'

storiesOf('Shared Components', module).add('Avatar', () => {
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
      <Avatar src={require('../../images/will.jpg')} />
    </div>
  )
})
