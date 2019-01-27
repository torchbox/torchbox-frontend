import React from 'react'
import { storiesOf } from '@storybook/react'

import JobsBlock from './jobs-block'

storiesOf('Components/Listing Pages', module).add('Jobs listing block', () => {
  return (
    <JobsBlock
      jobs={[
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},
        { title: 'Senior Django Developer', level: 'Manager/Supervisor', location: 'OXFORDSHIRE OR BRISTOL', href: '#'},


    ]} />
  )
})
