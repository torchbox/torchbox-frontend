// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import QuoteSlider from './quote-slider'

storiesOf('Components/Shared Components', module).add('Quote Slider', () => {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
        borderRadius: 5,
      }}
    >
      <QuoteSlider
        quotes={[
          {
            name: 'Nathan Horrigan',
            role: 'Dev, Torchbox',
            quote:
              'Meatloaf pancetta leberkas pig, bacon pork spare ribs shankle ball tip pork belly. Short loin tenderloin chuck tail biltong, porchetta t-bone prosciutto meatloaf chicken hamburger venison shoulder spare ribs brisket. Beef ribs meatloaf pork loin beef ribeye. Pork belly prosciutto ham hock, sausage spare ribs t-bone corned beef pig porchetta shoulder picanha leberkas tri-tip short ribs chuck.',
          },
          {
            name: 'John Appleseed',
            role: 'Hipster, Apple inc',
            quote:
              'Kombucha vaporware skateboard chillwave locavore cardigan mlkshk brooklyn shoreditch live-edge farm-to-table. Iceland YOLO health goth sriracha. Chambray cray neutra four dollar toast. Literally celiac cronut, biodiesel bespoke pour-over readymade mixtape. IPhone mlkshk drinking vinegar poutine mumblecore cardigan. Woke banh mi lumbersexual, tote bag meh microdosing flexitarian.',
          },
          {
            name: 'Duncan Jones',
            role: 'Head of Operations, Football Foundation',
            quote:
              "We are eternally grateful to the brilliant minds of Torchbox. Without them, we wouldn't be where we are today. We chose them because they embody the ethos of the sector we work in and have an excellent track record of building easy-to-use and 'clean', uncluttered systems.",
          },
        ]}
      />
    </div>
  )
})
