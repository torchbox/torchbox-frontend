import React from 'react'
import { storiesOf } from '@storybook/react'

import Bustout from './bustout'

storiesOf('Components/Shared Components', module).add('Bustout', () => {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
      }}
    >
      <Bustout caption={'lorem'} align={'left'} />
    </div>
  )
})
