import React from 'react'
import { storiesOf } from '@storybook/react'

import CaseStudyListingPage from './case-study-listing'

storiesOf('Pages', module).add('Case-Study Listing', () => {
  return (
    <CaseStudyListingPage
      title="Our work [on amazing digital things]."
      caseStudies={[
        {
          title: 'A Progressive Web App for Mozilla.',
          listingSummary:
            'When Mozilla approached us to work with them on a Progressive Web App (PWA), we knew we had to say yes.',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Abigail Hampson',
              personPage: {
                slug: 'abigail-hampson',
                role: 'Project Manager',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Relaunching Nesta on a platform for the future',
          listingSummary: 'Nesta choose Wagtail as the platform to build on',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Olly Willans',
              personPage: {
                slug: 'olly-willans',
                role: 'Creative Director',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title:
            'Imagining and designing a future product for MQ in 5 days flat',
          listingSummary:
            'Read about our experience with the fantastic team from MQ: Transforming Mental Health, in an intense, week-long design sprint.',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Olly Willans',
              personPage: {
                slug: 'olly-willans',
                role: 'Creative Director',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: "Spotify Listeners Tune Into Samaritans' Big Listen Campaign",
          listingSummary:
            'A case study outlining the work Torchbox did with Samaritans to promote The Big Listen 2018 on Spotify',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'PPC',
              slug: 'ppc',
            },
          ],
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Great Ormond Street Hospital Charity PPC Case Study',
          listingSummary:
            'Pay-per-click (PPC) management for Great Ormond Street Hospital Charity (GOSH)',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'PPC',
              slug: 'ppc',
            },
            {
              name: 'Data',
              slug: 'data',
            },
            {
              name: 'Google Ad Grants',
              slug: 'google-ad-grants',
            },
          ],
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'DEC Emergency Appeal',
          listingSummary: 'Analytics and paid search for the DEC',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'PPC',
              slug: 'ppc',
            },
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Girl Effect',
          listingSummary:
            'Personalisation empowers users of Girl Effects, Springster mobile platform',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Will Heinemann',
              personPage: {
                slug: 'will-heinemann',
                role: 'Head of New Business',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Health Research Authority',
          listingSummary:
            'HRA wanted a site where people could find what they needed.',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Anthony Fairweather',
              personPage: {
                slug: 'anthony-fairweather',
                role: 'Account Director',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Youth Sport Trust',
          listingSummary:
            'School Games Web app redesign and build for Youth Sport Trust and Sport England',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Will Heinemann',
              personPage: {
                slug: 'will-heinemann',
                role: 'Head of New Business',
                feedImage: {
                  src: {
                    url: 'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs4.jpg',
                  }
                },
              },
            },
          ],
        },
        {
          title: 'Meningitis Now',
          listingSummary:
            'SEO campaign leans on Google Grants insights to drive 107% increase in organic traffic',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'SEO',
              slug: 'seo',
            },
          ],
          authors: [],
        },
        {
          title: 'Mencap',
          listingSummary:
            'PPC provides the missing link for Mencap’s ‘Here I am’ campaign',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'PPC',
              slug: 'ppc',
            },
          ],
          authors: [],
        },
        {
          title: 'Médecins Sans Frontières‎',
          listingSummary: 'User-centered approach to website redesign',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Football Foundation',
          listingSummary:
            "Enterprise-scale custom web application for the UK's largest sports charity",
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Yahoo Sport',
          listingSummary: '',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [],
        },
        {
          title: 'Mediae',
          listingSummary: 'SMS support for Kenyan farmers',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'UNHCR',
          listingSummary: '',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'QualityWatch',
          listingSummary: '',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Football Foundation',
          listingSummary:
            'Three custom web applications for the Football Foundation',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Africa Progress Panel',
          listingSummary: 'Social video campaign drives record downloads',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [],
        },
        {
          title: 'Royal College of Art',
          listingSummary: 'A stunning redevelopment for the RCA',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'Chatham House',
          listingSummary: 'A complex Drupal build for Chatham House',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'WWF',
          listingSummary: '',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Centrepoint',
          listingSummary:
            "The UK's first centralised source of youth homelessness data",
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Museum of London',
          listingSummary: 'Reinterpreting the Museum of London’s brand',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Royal College of Nursing',
          listingSummary: 'Search and social campaign for the RCN',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'SEO',
              slug: 'seo',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
            {
              name: 'Data',
              slug: 'data',
            },
          ],
          authors: [],
        },
        {
          title: 'University of Oxford',
          listingSummary:
            'Drupal website for long-term partners University of Oxford',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Wagtail',
          listingSummary: '',
          tags: [],
          authors: [],
        },
        {
          title: 'The Roman Baths',
          listingSummary: '',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Global Witness',
          listingSummary: 'Making the most of Google Grants',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Google Ad Grants',
              slug: 'google-ad-grants',
            },
          ],
          authors: [],
        },
        {
          title: 'Royal Agricultural University',
          listingSummary: 'Bringing the RAU experience to life',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Breast Cancer Care',
          listingSummary: '',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'Yahoo Sports',
          listingSummary: '',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [],
        },
        {
          title: 'IPPF',
          listingSummary: '',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [],
        },
        {
          title: 'GroceryAid',
          listingSummary: '',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'CIFF',
          listingSummary:
            'Bringing grant-making impact to life with stories and data visualisation',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'Global Witness',
          listingSummary: 'A new Wagtail website for Global Witness',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'Royal Drawing School',
          listingSummary: 'A Wagtail-powered site for the Royal Drawing School',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'Meningitis Now',
          listingSummary:
            'Mobile first, story-led website with Salesforce CRM integration',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
      ]}
      teasers={[
        {
          feedImage: require('../../images/tbx-flame.svg'),
          title: ['Wagtail CMS', <br />, 'services'],
          description: 'For web builds with the Wagtail open source CMS',
          link: '#',
        },
        {
          feedImage: require('../../images/tbx-flame.svg'),
          title: ['Data', <br />, 'marketing'],
          description: 'For our data driven digital marketing services',
          link: '#',
        },
      ]}
    />
  )
})
