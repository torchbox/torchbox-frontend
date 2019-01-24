import React from 'react'
import { storiesOf } from '@storybook/react'

import CaseStudiesBlock from './case-studies-block'

storiesOf('Landing Page', module).add('Case Studies block', () => {
  return (
    <CaseStudiesBlock
      listingUrl={'#'}
      caseStudies={[
      {
        client: 'YOUTH SPORT TRUST',
        title: 'Reimagining the School Games custom application',
        description: 'School Games is a programme run by the Youth Sport Trust (YST) that delivers more than 3 million sporting opportunities for 5-18 year olds every year.',
        image: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs3.jpg',
      },
      {
        client: 'MEDIAE',
        title: 'SMS support for Kenyan farmers',
        description: 'iShamba, a custom SMS application, provides Kenyan farmers with access to the latest market prices, weather forecasts and agricultural tips. ',
        image: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs1.jpg',
      },
      {
        client: 'MOZILLA',
        title: 'A PWA in four weeks for Mozilla (oh yeah!). Tick.',
        description: 'Mozilla has thousands of expert volunteers engaged in their not-for-profit mission. Our task was to build a PWA - a website that you access through a browser like any other...',
        image: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
      },
      {
        client: 'CENTREPOINT',
        title: 'The UK\'s first centralised source of youth homelessness data',
        image: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs2.jpg',
        description: 'Centrepoint is a youth homelessness charity which provides people, aged 16-25, with a safe place to live in London and the North East of England.',
      },
    ]}
    />
  )
})
