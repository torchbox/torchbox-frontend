// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import ServicePage from './service-page'

storiesOf('Pages', module).add('Service Page', () => {
  return (
    <ServicePage
      blocks={[
        {
          type: 'hero-block',
          data: {
            strapline:
              "The digital product agency [for tomorrow's non-profits].",
            intro: '<p></p>',
            links: [
              { title: 'Services', href: '#' },
              { title: 'Clients', href: '#' },
              { title: 'Process', href: '#' },
              { title: 'Work', href: '#' },
              { title: 'Thinking', href: '#' },
            ],
          },
        },

        {
          type: 'help-block',
          data: {
            sectionTitle: 'services',
            heading:
              '<p>We make products fast and transform the way your organisation works at the same time...</p>',
            links: [
              {
                title: 'Understand your users',
              },
              {
                title: 'Kick start a product idea with a design sprint',
              },
              {
                title: 'Develop your product strategy and roadmap',
              },
              {
                title: 'Design and build lightweight apps and tools',
              },
              {
                title: 'Build a prototype (using the latest tech)',
              },
              {
                title: 'Build a product and change your culture in one quarter',
              },
              {
                title:
                  'Get things done faster and better by embracing the Agile way',
              },
            ],
            contact: {
              name: 'Will Heinemen',
              email: 'will@torchbox.com',
              phone: '+41524204242',
              image: {
                src: 'http://localhost:8000/media/original_images/kim-2.jpg',
              },
            },
          },
        },

        {
          type: 'testimonials-block',
          data: {
            logos: [
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
              {
                image: {
                  src:
                    'http://localhost:8000/media/original_images/1162px-Firefox_Logo_2017.png',
                },
              },
            ],

            testimonials: [
              {
                person: 'EVIN JOYCE',
                quote:
                  'Torchbox were a fantastic partner building the Maano app. Their expertise and commitment to the project meant that we got from concept note and whiteboard discussions to launching the app on Google Playstore in less than four months',
                role: 'Programme Officer, WFP',
              },
              {
                person: 'Nathan',
                quote:
                  'Torchbox were a fantastic partner building the Maano app. Their expertise and commitment to the project meant that we got from concept note and whiteboard discussions to launching the app on Google Playstore in less than four months.',
                role: 'Dev @ TBX',
              },
            ],
          },
        },

        {
          type: 'process-block',
          data: {
            title: '{Ten weeks to launch a [new] product}',
          },
        },

        {
          type: 'case-studies-block',
          data: {
            listingUrl: '#',
            caseStudies: [
              {
                title: 'A Progressive Web App for Mozilla.',
                description:
                  'When Mozilla approached us to work with them on a Progressive Web App (PWA), we knew we had to say yes.',
                image: {
                  src: {
                    url:
                      'http://localhost:8000/media/images/man-1718099_1920.width-1280.jpg',
                  },
                },
              },
              {
                title:
                  'Imagining and designing a future product for MQ in 5 days flat',
                listingSummary:
                  'Read about our experience with the fantastic team from MQ: Transforming Mental Health, in an intense, week-long design sprint.',
                feedImage: {
                  rendition: {
                    url:
                      'http://localhost:8000/media/images/hq-5787.width-1280.jpg',
                  },
                },
              },
              {
                title: 'Health Research Authority',
                listingSummary:
                  'HRA wanted a site where people could find what they needed.',
                feedImage: null,
              },
              {
                title: 'Relaunching Nesta on a platform for the future',
                listingSummary:
                  'Nesta choose Wagtail as the platform to build on',
                feedImage: null,
              },
            ],
          },
        },

        {
          type: 'blogs-block',
          data: {
            sectionTitle: 'Thinking',
            listingUrl: '#',
            blogs: [
              {
                title: 'We’ve dropped Drupal (Featured).',
                description:
                  'From tomorrow, score every meeting. Score it out of ten at the end of the meeting. Not just you, all participants. Do it for client meetings too. Nothing below a score of eight counts as a good meeting.',
                authorName: 'Paul Vetch',
                authorRole: 'Client Services Director',
                authorAvatar: require('../../images/will.jpg'),
              },
              {
                title: 'We’ve dropped Drupal.',
                authorName: 'Paul Vetch',
                authorRole: 'Client Services Director',
                authorAvatar: require('../../images/will.jpg'),
              },
              {
                title: 'We’ve dropped Drupal.',
                authorName: 'Paul Vetch',
                authorRole: 'Client Services Director',
                authorAvatar: require('../../images/will.jpg'),
              },
              {
                title: 'We’ve dropped Drupal.',
                authorName: 'Paul Vetch',
                authorRole: 'Client Services Director',
                authorAvatar: require('../../images/will.jpg'),
              },
              {
                title: 'We’ve dropped Drupal.',
                authorName: 'Paul Vetch',
                authorRole: 'Client Services Director',
                authorAvatar: require('../../images/will.jpg'),
              },
            ],
          },
        },
      ]}
    />
  )
})
