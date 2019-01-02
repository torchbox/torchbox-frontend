import React from 'react'
import { storiesOf } from '@storybook/react'

import Contact from './contact'

storiesOf('Shared Components', module).add('Contact Block (Detailed)', () => {
  return (
    <Contact
      email="will@torchbox.com"
      number="+44 (0) 7545 468483"
      reasons={[
        {
          title: 'Your brief',
          description: 'Get advice on the best way to structure your brief to set your project up for success'
        },
        {
          title: 'Your guarantee',
          description: 'Find out about our reassuring guarantee that even procurement will love!'
        },
        {
          title: 'Our chemistry',
          description: 'Ask me anything! Its good to make double sure we’re the right fit for you'
        },
      ]}
    />
  )
})
