import React from 'react'
import { storiesOf } from '@storybook/react'

import Contact from './contact'

storiesOf('Components/Shared Components', module).add('Contact Block (Detailed)', () => {
  return (
    <Contact />
  )
})
