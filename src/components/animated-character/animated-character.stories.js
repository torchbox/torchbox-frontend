// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import AnimatedCharacter from './animated-character'

storiesOf('Components/Shared Components', module).add(
  'Animated Character',
  () => {
    return (
      <div>
        <AnimatedCharacter character="woman-left" />
      </div>
    )
  }
)
