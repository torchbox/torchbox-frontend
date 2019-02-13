import React from 'react'
import { storiesOf } from '@storybook/react'

import ProcessBlock from './process-block'

storiesOf('Components/Landing Page', module).add(
  'Process (image) block',
  () => {
    return (
      <ProcessBlock
        title={`{Ten weeks to launch a [new] product}`}
        processes={[
          {
            title: 'Plug research gaps',
            description:
              'Lengthy research rarely delivers value for money. We learn just enough, when we’ve got a good idea, we prototype and test.',
          },
          {
            title: 'Do a design sprint',
            description:
              'Through a structured, intensive programme of work, design sprints deliver a vision and a tested prototype in under a week. Big progress.',
          },
          {
            title: 'Then plan and refine sprint',
            description:
              'One week to develop the prototype and prep the development sprints, including building the backlog and determining the tech architecture.',
          },
          {
            title: 'Six weeks to MVP',
            description:
              'Normally three, two-week sprints to get to an MVP launch. Six week builds keep teams sharp and when we launch fast, we start learning fast.',
          },
          {
            title: 'Test, learn and plan',
            description:
              'Normally three, two-week sprints to get to an MVP launch. Six week builds keep teams sharp and when we launch fast, we start learning fast.',
          },
        ]}
      />
    )
  }
)
