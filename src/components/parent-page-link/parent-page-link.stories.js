import React from 'react'
import { storiesOf } from '@storybook/react'

import ParentPageLink from './parent-page-link'

storiesOf('Components/Shared Components', module).add(
  'Parent Page Link',
  () => {
    return (
      <div
        style={{
          margin: 50,
          padding: 40,
          background: 'white',
          borderRadius: 5,
          width: 170,
          zIndex: 0,
        }}
      >
        <ParentPageLink src={require('../../images/will.jpg')} />
      </div>
    )
  }
)
