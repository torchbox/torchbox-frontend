import React from 'react'
import { storiesOf } from '@storybook/react'

import AnimatedCharacter from './animated-character'

storiesOf('Components/Shared Components', module).add(
  'Animated Character',
  () => {
    return (
      <div>
        <AnimatedCharacter character="left-woman" />
      </div>
    )
  }
)
