import React from 'react'
import { storiesOf } from '@storybook/react'

import BlogListingPage from './jobs-listing'

storiesOf('Pages', module).add('Job Listing', () => {
  return (
    <BlogListingPage
      title="Join the team [and make wicked digital stuff]."
      jobs={[
        {
          url:
            'http://torchbox.applytojob.com/apply/9rpxkBYWBv/Senior-Django-Developer',
          level: 'Senior',
          location: 'Bristol or Charlbury',
          title: 'Senior Django Developer',
        },
        {
          url:
            'https://torchbox.applytojob.com/apply/mSdQToIH2x/PPC-Account-Manager',
          level: 'Experienced',
          location: 'Bristol or Charlbury',
          title: 'PPC Account Manager',
        },
        {
          url: 'https://torchbox.applytojob.com/apply/JejbybgC1l/SEO-Analyst',
          level: 'Experienced',
          location: 'Bristol or Charlbury',
          title: 'SEO Analyst',
        },
        {
          url:
            'https://torchbox.applytojob.com/apply/gRpG9xWdDE/Front-End-Developer',
          level: 'Junior',
          location: 'Bristol or Charlbury',
          title: 'Front End Developer',
        },
      ]}
      teasers={[
        {
          image: require('../../images/tbx-flame.svg'),
          title: ['Wagtail CMS', <br />, 'services'],
          description: 'For web builds with the Wagtail open source CMS',
          link: '#',
        },
        {
          image: require('../../images/tbx-flame.svg'),
          title: ['Data', <br />, 'marketing'],
          description: 'For our data driven digital marketing services',
          link: '#',
        },
      ]}
    />
  )
})
