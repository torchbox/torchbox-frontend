// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import ServicesBlock from './services-block'
// Styles
import styles from './services-block.module.scss'

storiesOf('Components/Landing Page', module).add(
  'Services listing block',
  () => {
    return (
      <div className={styles.darkTheme}>
        <ServicesBlock
          listingUrl={'#'}
          services={[
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
            {
              title: 'User research and prototyping',
              desc:
                'We’ll help you understand your users needs, triggers, barriers and goals. We learn just enough, when we’ve got a good idea, we prototype and test',
            },
          ]}
        />
      </div>
    )
  }
)
