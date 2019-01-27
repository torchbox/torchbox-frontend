import React from 'react'
import { storiesOf } from '@storybook/react'

import Contact from './contact'

storiesOf('Components/Shared Components', module).add('Contact Block (Minimal)', () => {
  return (
    <Contact
      title="Get in touch about your project"
      email="will@torchbox.com"
      number="+44 (0) 7545 468483"
    />
  )
})
