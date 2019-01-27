import React from 'react'
import { storiesOf } from '@storybook/react'

import BlogListingPage from './blog-listing'

storiesOf('Pages', module).add('Blog Listing', () => {
  return (
    <BlogListingPage
      title="Our thinking [about all things digital]."
      blogs={[
        {
          title: 'The simple hack to make meetings better',
          date: '2019-01-02',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'We’ve dropped Drupal.',
          date: '2018-10-17',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Paul Vetch',
              personPage: {
                slug: 'paul-vetch',
                role: 'Client Services Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/IMG_3157.JPG',
                },
              },
            },
          ],
        },
        {
          title:
            "We're supporting Google, NASA, Oxfam & the NHS on Wagtail,  now we can support you too",
          date: '2018-09-27',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'The difference between teaching and coaching',
          date: '2018-07-27',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Phil Dexter',
              personPage: {
                slug: 'phil-dexter',
                role: 'Senior Project Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-phil-d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'How to Perfect Your Donations Thank You Page',
          date: '2018-07-06',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Kyle Magee',
              personPage: {
                slug: 'kyle-magee',
                role: 'UX Architect',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/20170913_163803.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Wagtail conference and sprint in Philadelphia',
          date: '2018-06-16',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-will.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'NHS Wagtail Sprint',
          date: '2018-05-02',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'From Graduate to The Grand Appeal',
          date: '2018-04-26',
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
                image: {
                  src: 'https://media.torchbox.com/original_images/Abigail.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Wagtail Space 2018',
          date: '2018-03-28',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Matthew Westcott',
              personPage: {
                slug: 'matthew-westcott',
                role: 'Senior Developer',
                image: {
                  src: 'https://media.torchbox.com/original_images/Matthew.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Being an Intern at Torchbox',
          date: '2018-03-23',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tomasz Knapik',
              personPage: {
                slug: 'tomasz-knapik',
                role: 'Python Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Tomasz_Knapik.jpg',
                },
              },
            },
          ],
        },
        {
          title:
            'GDPR compliant? Over one third of charities still need to sort out their data collection before the May deadline.',
          date: '2018-03-13',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'NHS Digital Transformation meet up at Torchbox',
          date: '2018-02-28',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-will.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Why you should stop using demographics in personas',
          date: '2018-02-09',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Saunders',
              personPage: {
                slug: 'tom-saunders',
                role: 'Head of UX Research',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-tom.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'How analytics drive donations',
          date: '2017-12-13',
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
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Books, Chess and starting at Torchbox',
          date: '2017-11-27',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
          ],
          authors: [
            {
              name: 'Kyle Magee',
              personPage: {
                slug: 'kyle-magee',
                role: 'UX Architect',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/20170913_163803.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'The magic of personalisation',
          date: '2017-11-23',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-will.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'A project manager’s field trip - to GDS and back again.',
          date: '2017-11-21',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ellen Haggan',
              personPage: {
                slug: 'ellen-haggan',
                role: 'Senior Project Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ellen_UyPunT0.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Talking SEO with the NHS',
          date: '2017-11-09',
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
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'A design week with California College of the Arts',
          date: '2017-11-08',
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
              name: 'Olly Willans',
              personPage: {
                slug: 'olly-willans',
                role: 'Creative Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'J-P Stacey',
          date: '2017-10-24',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title:
            'Why would California College of the Arts want to work with a UK Agency?',
          date: '2017-10-04',
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
              name: 'Tom Williams',
              personPage: {
                slug: 'tom-williams',
                role: 'Account Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tom_Wn9d51V.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Life as a User Experience Consultant: Tom Saunders',
          date: '2017-10-01',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Saunders',
              personPage: {
                slug: 'tom-saunders',
                role: 'Head of UX Research',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-tom.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Getting To Wagtail Sprint Bristol 18th-20th October',
          date: '2017-09-28',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Anneliese Paul',
              personPage: {
                slug: 'anneliese-paul',
                role: 'Content Lead',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-anneliese.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Join our Wagtail Sprint in Bristol',
          date: '2017-09-14',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Anneliese Paul',
              personPage: {
                slug: 'anneliese-paul',
                role: 'Content Lead',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-anneliese.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Watch a giant Wagtail perch in our office!',
          date: '2017-09-14',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Anneliese Paul',
              personPage: {
                slug: 'anneliese-paul',
                role: 'Content Lead',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-anneliese.jpg',
                },
              },
            },
          ],
        },
        {
          title:
            'NHS picks Wagtail CMS to power the next generation of its online services',
          date: '2017-09-01',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-will.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for five RAR Digital Awards',
          date: '2017-05-22',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: "Wagtail's big news, Trumped.",
          date: '2017-04-26',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [],
        },
        {
          title: 'An extrovert intranet for the Royal College of Art',
          date: '2017-03-13',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Paul Vetch',
              personPage: {
                slug: 'paul-vetch',
                role: 'Client Services Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/IMG_3157.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox named as one of the best places to work in the UK',
          date: '2017-02-23',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Mencap devises paid search campaign with help from Torchbox',
          date: '2017-02-10',
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
          title:
            'Médecins Sans Frontières renovates UK website with help from Torchbox',
          date: '2017-01-17',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: "Torchbox's Christmas jumper mannequin challenge",
          date: '2016-12-16',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'University of Oxford wins 2016 Website of the Year award',
          date: '2016-12-13',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title:
            "High Court rules against PPC advertiser for bidding on competitor's brand terms",
          date: '2016-12-01',
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
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Design trends: all the best, big hero image',
          date: '2016-11-28',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ben Enright',
              personPage: {
                slug: 'ben-enright',
                role: 'Head of UX Design',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-ben_1.jpg',
                },
              },
            },
          ],
        },
        {
          title:
            'Torchbox awarded elite agency status in The Drum’s Digital Census',
          date: '2016-11-23',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Social Media Week Bristol',
          date: '2016-11-14',
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
          authors: [
            {
              name: 'Jonny Grum',
              personPage: {
                slug: 'jonny-grum',
                role: 'Head of Content & Social',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Screen_Shot_2016-11-14_at_08.18.16.png',
                },
              },
            },
          ],
        },
        {
          title: 'The decline of Vine: $30 million down the drain',
          date: '2016-11-03',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Amelia Ellery',
              personPage: {
                slug: 'amelia-ellery',
                role: 'Social Media Intern',
                image: null,
              },
            },
          ],
        },
        {
          title: 'Designing beautiful websites with a typographic scale',
          date: '2016-10-20',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Adam Solley',
              personPage: {
                slug: 'adam-solley',
                role: 'Senior UX Designer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Adam_Solley_hUYGW1E.jpg',
                },
              },
            },
          ],
        },
        {
          title: "The future's not set: SearchLove London 2016 digested",
          date: '2016-10-19',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
          ],
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox wins five Digital Impact Awards',
          date: '2016-10-19',
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
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for 10 Website of the Year Awards',
          date: '2016-10-06',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for three Social Buzz Awards',
          date: '2016-10-03',
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
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Introducing our Bristol office',
          date: '2016-09-26',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Twitter relaxes 140 character limit',
          date: '2016-09-20',
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
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Kernow DAT 2016',
          date: '2016-09-19',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
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
          authors: [
            {
              name: 'Tom Readings',
              personPage: {
                slug: 'tom-readings',
                role: 'Developer',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-2825.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'How to write a proper brief',
          date: '2016-09-14',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Anthony Fairweather',
              personPage: {
                slug: 'anthony-fairweather',
                role: 'Account Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-ant_1.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox wins two WebAwards',
          date: '2016-09-12',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for five Digital Impact Awards',
          date: '2016-08-19',
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
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'How to remove unwanted files from your Git repository',
          date: '2016-08-02',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Dan Braghis',
              personPage: {
                slug: 'dan-braghis',
                role: 'Senior Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-dan.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Google AdWords update: expanded text ads',
          date: '2016-07-29',
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
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for best website at the Dadi Awards',
          date: '2016-07-28',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Twitter users now able to verify accounts',
          date: '2016-07-27',
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
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: "Darren Tweed's work experience placement at Torchbox",
          date: '2016-07-26',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Introducing the Wagtail admin API',
          date: '2016-07-20',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Karl Hobley',
              personPage: {
                slug: 'karl-hobley',
                role: 'Python Developer',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3535.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox shortlisted for two Wirehive 100 awards',
          date: '2016-07-19',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox at DjangoCon US 2016',
          date: '2016-07-18',
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
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Improve website usability with effective navigation labels',
          date: '2016-06-21',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Is Twitter trying to build character?',
          date: '2016-05-19',
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
          authors: [
            {
              name: 'Rob Carter',
              personPage: {
                slug: 'rob-carter',
                role: 'Senior Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Rob_Blue_Pool.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Life as a lead designer at Torchbox',
          date: '2016-05-11',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ashley Burgess',
              personPage: {
                slug: 'ashley-burgess',
                role: 'Digital Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ashley_Burgess.png',
                },
              },
            },
          ],
        },
        {
          title: 'Digital Outcomes',
          date: '2016-04-28',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ian Bellchambers',
              personPage: {
                slug: 'ian-bellchambers',
                role: 'Business Development Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/ian2.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Designed for London',
          date: '2016-04-20',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Paul Vetch',
              personPage: {
                slug: 'paul-vetch',
                role: 'Client Services Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/IMG_3157.JPG',
                },
              },
            },
          ],
        },
        {
          title: '66% of charities are not making the most of Google Ad Grants',
          date: '2016-04-14',
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
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title:
            'Google Ad Grants: link your Google Analytics account to AdWords',
          date: '2016-04-12',
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
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Best of British Swimming',
          date: '2016-04-12',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Ian Bellchambers',
              personPage: {
                slug: 'ian-bellchambers',
                role: 'Business Development Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/ian2.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: improve CTR with automated rules',
          date: '2016-04-12',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: optimize for quality',
          date: '2016-04-11',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: Smart Goals in Google Analytics',
          date: '2016-04-10',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Data',
              slug: 'data',
            },
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: create a shared budget for all campaigns',
          date: '2016-04-08',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google ad grants: remove duplicate keywords',
          date: '2016-04-07',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: dynamic keyword insertion',
          date: '2016-04-06',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Google Ad Grants: ad extensions',
          date: '2016-04-05',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Wagtail in Cape Town',
          date: '2016-03-01',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'How will the removal of side ads affect google ad grants?',
          date: '2016-02-26',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Why I love the ECF conference',
          date: '2016-02-12',
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
              name: 'SEO',
              slug: 'seo',
            },
            {
              name: 'Social media',
              slug: 'social-media',
            },
            {
              name: 'Google Ad Grants',
              slug: 'google-ad-grants',
            },
          ],
          authors: [
            {
              name: 'Rob Salmon',
              personPage: {
                slug: 'rob-salmon',
                role: 'Director of Digital Marketing',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/robsalmon.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Please take our Google Ad Grants survey',
          date: '2016-01-21',
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
          authors: [
            {
              name: 'Rob Salmon',
              personPage: {
                slug: 'rob-salmon',
                role: 'Director of Digital Marketing',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/robsalmon.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'The data revolution',
          date: '2015-11-25',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Jason Williams',
              personPage: {
                slug: 'jason-williams',
                role: 'Business Development Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/10262134_10203474338517165_673295434524386377_n.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Free basics on Wagtail',
          date: '2015-11-16',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'The Global Goals, tell everyone!',
          date: '2015-11-06',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Jason Williams',
              personPage: {
                slug: 'jason-williams',
                role: 'Business Development Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/10262134_10203474338517165_673295434524386377_n.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Core code sprinting at DrupalCon Barcelona',
          date: '2015-10-09',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Glenn Barr',
              personPage: {
                slug: 'glenn-barr',
                role: 'Drupal Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/gb_XBOd2um.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Pod people 001',
          date: '2015-09-28',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Leon Terner',
              personPage: {
                slug: 'leon-terner',
                role: 'Project Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/leon_terner.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'How to get your first design job',
          date: '2015-09-17',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Saunders',
              personPage: {
                slug: 'tom-saunders',
                role: 'Head of UX Research',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-tom.jpg',
                },
              },
            },
          ],
        },
        {
          title: '40-Year-Old Lessons and the Mythical Man-Month',
          date: '2015-08-26',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Edd Baldry',
              personPage: {
                slug: 'edd-baldry',
                role: 'Project Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/edd-baldry-torchbox.jpg',
                },
              },
            },
          ],
        },
        {
          title: "The not-for-profit's guide to working with agencies",
          date: '2015-08-05',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Ellen Haggan',
              personPage: {
                slug: 'ellen-haggan',
                role: 'Senior Project Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Ellen_UyPunT0.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Keeping users in mind: a reading list',
          date: '2015-07-24',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Saunders',
              personPage: {
                slug: 'tom-saunders',
                role: 'Head of UX Research',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tbx_team-tom.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Streamfield solves the content management conundrum',
          date: '2015-07-13',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Django: a guide to upgrading your application',
          date: '2015-06-04',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Neal Todd',
              personPage: {
                slug: 'neal-todd',
                role: 'Senior Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Neal_Todd_lYZT3MK.jpg',
                },
              },
            },
          ],
        },
        {
          title: "Welcome: Torchbox's new starters",
          date: '2015-05-05',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Rob Carter',
              personPage: {
                slug: 'rob-carter',
                role: 'Senior Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Rob_Blue_Pool.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'iShamba: revolutionising farming in Kenya',
          date: '2015-04-27',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Nick Smith',
              personPage: {
                slug: 'nick-smith',
                role: 'Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/nick_smith_2018.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'My silver rule for Twitter campaigns',
          date: '2015-04-20',
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
          authors: [
            {
              name: 'Pete Martin',
              personPage: {
                slug: 'pete-martin',
                role: 'Senior Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Pete_Martin.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'You’re not the BBC (and that’s OK).',
          date: '2015-04-15',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Wes West',
              personPage: {
                slug: 'wes-west',
                role: 'Senior designer & director of animation',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-wes.jpg',
                },
              },
            },
          ],
        },
        {
          title: "The card's the star",
          date: '2015-03-24',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Paul Vetch',
              personPage: {
                slug: 'paul-vetch',
                role: 'Client Services Director',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/IMG_3157.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Rich text fields and faster horses',
          date: '2015-03-12',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Matthew Westcott',
              personPage: {
                slug: 'matthew-westcott',
                role: 'Senior Developer',
                image: {
                  src: 'https://media.torchbox.com/original_images/Matthew.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Google favours mobile-friendly sites in search rankings',
          date: '2015-03-03',
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
          authors: [
            {
              name: 'Phil McMinn',
              personPage: {
                slug: 'phil-mcminn',
                role: 'Head of Search & Analytics',
                image: {
                  src: 'https://media.torchbox.com/original_images/hq-3500.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Simple maps in Wagtail with Google and geopy',
          date: '2015-02-25',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Talbot',
              personPage: {
                slug: 'tom-talbot',
                role: 'Python Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Tom_Talbot_bLQqHZa.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Banana Pi: intranet pages on a tiny computer',
          date: '2015-02-12',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Johannes Spielmann',
              personPage: null,
            },
          ],
        },
        {
          title: 'My golden rule for Twitter campaigns',
          date: '2015-01-30',
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
          authors: [
            {
              name: 'Pete Martin',
              personPage: {
                slug: 'pete-martin',
                role: 'Senior Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Pete_Martin.jpg',
                },
              },
            },
          ],
        },
        {
          title: "Torchbox's 2015 resolutions",
          date: '2015-01-12',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [],
        },
        {
          title: 'SMS support for Kenyan farmers',
          date: '2015-01-08',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: "Torchbox's core organisational values",
          date: '2015-01-08',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Quality economics',
          date: '2014-12-19',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Wes West',
              personPage: {
                slug: 'wes-west',
                role: 'Senior designer & director of animation',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-wes.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'What is DNS and why do I need to know?',
          date: '2014-11-21',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Helen Chapman',
              personPage: {
                slug: 'helen-chapman',
                role: 'Front-end Team Leader',
                image: {
                  src: 'https://media.torchbox.com/original_images/Helen.png',
                },
              },
            },
          ],
        },
        {
          title: 'A principled approach for the University of Oxford',
          date: '2014-08-07',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Social media sunstones: a simple toolkit',
          date: '2014-07-18',
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
          authors: [
            {
              name: 'Pete Martin',
              personPage: {
                slug: 'pete-martin',
                role: 'Senior Marketing Executive',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Pete_Martin.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Take a look at the Wagtail launch event',
          date: '2014-06-27',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Rob Salmon',
              personPage: {
                slug: 'rob-salmon',
                role: 'Director of Digital Marketing',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/robsalmon.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Wagtail 0.3 - say hello to Edit Bird',
          date: '2014-06-20',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Interactive video campaign for SGOSS',
          date: '2014-06-13',
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
          authors: [
            {
              name: 'Rob Salmon',
              personPage: {
                slug: 'rob-salmon',
                role: 'Director of Digital Marketing',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/robsalmon.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Grantspro is back for Google Ad Grants',
          date: '2014-06-06',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Wagtail in one line',
          date: '2014-03-17',
          tags: [
            {
              name: 'Wagtail',
              slug: 'wagtail',
            },
          ],
          authors: [
            {
              name: 'Tom Dyson',
              personPage: {
                slug: 'tom-dyson',
                role: 'Technical Director',
                image: {
                  src: 'https://media.torchbox.com/original_images/tom_d.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Gold panning in Google Analytics',
          date: '2014-03-06',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Data',
              slug: 'data',
            },
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Meet Wagtail, our new CMS',
          date: '2014-02-24',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Icon gonts, SVG and modern web graphics',
          date: '2014-02-13',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Dave Cranwell',
              personPage: {
                slug: 'dave-cranwell',
                role: 'Head of Front End Development',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-dave.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'A choose your own adventure video',
          date: '2014-01-14',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'James Morris',
              personPage: {
                slug: 'james-morris',
                role: 'Drupal Front End Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/tumblr_ltsauvDrwI1r59cdko1_500.png',
                },
              },
            },
          ],
        },
        {
          title: 'Royal College of Art website launched',
          date: '2013-12-02',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Hackference Birmingham',
          date: '2013-10-18',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Johan Gant',
              personPage: {
                slug: 'johan-gant',
                role: 'Drupal Team Manager',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Johan_Gant_aCGyprk.png',
                },
              },
            },
          ],
        },
        {
          title: 'Accessibility: interesting links',
          date: '2013-09-26',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Wes West',
              personPage: {
                slug: 'wes-west',
                role: 'Senior designer & director of animation',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-wes.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Record & ride',
          date: '2013-04-22',
          tags: [],
          authors: [
            {
              name: 'Wes West',
              personPage: {
                slug: 'wes-west',
                role: 'Senior designer & director of animation',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-wes.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Frontend United: when hard work pays off',
          date: '2013-04-17',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Justine Pocock',
              personPage: {
                slug: 'justine-pocock',
                role: 'Drupal Front End Developer',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Justine_Pocock.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Adios, Manuel',
          date: '2013-03-13',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Responsive email design for Nuffield Trust',
          date: '2013-03-11',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Wes West',
              personPage: {
                slug: 'wes-west',
                role: 'Senior designer & director of animation',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-wes.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Google Engage: Box of Tricks 2012',
          date: '2012-12-04',
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
            {
              name: 'Google Ad Grants',
              slug: 'google-ad-grants',
            },
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Jekyll for front end development',
          date: '2012-11-26',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Dave Cranwell',
              personPage: {
                slug: 'dave-cranwell',
                role: 'Head of Front End Development',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-dave.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Torchbox University: Advanced Google Analytics',
          date: '2012-11-23',
          tags: [
            {
              name: 'Digital Marketing',
              slug: 'digital-marketing',
            },
            {
              name: 'Data',
              slug: 'data',
            },
          ],
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Mapping Global Competitiveness with Mapbox',
          date: '2012-09-20',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Dave Cranwell',
              personPage: {
                slug: 'dave-cranwell',
                role: 'Head of Front End Development',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/people-dave.jpg',
                },
              },
            },
          ],
        },
        {
          title: 'Cher Président',
          date: '2012-03-06',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'The Torchbox choir',
          date: '2012-02-27',
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
                image: {
                  src:
                    'https://media.torchbox.com/original_images/Olly_Willans_IG1p6zY.png',
                },
              },
            },
          ],
        },
        {
          title: 'Google Grants: an introduction',
          date: '2011-12-19',
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
          authors: [
            {
              name: 'Christopher Whalen',
              personPage: {
                slug: 'christopher-whalen',
                role: 'Search and Analytics Consultant',
                image: {
                  src: 'https://media.torchbox.com/original_images/chrisw.JPG',
                },
              },
            },
          ],
        },
        {
          title: 'Welcome to the Perk District',
          date: '2011-09-12',
          tags: [
            {
              name: 'Digital products',
              slug: 'digital-products',
            },
          ],
          authors: [
            {
              name: 'Rob Salmon',
              personPage: {
                slug: 'rob-salmon',
                role: 'Director of Digital Marketing',
                image: {
                  src:
                    'https://media.torchbox.com/original_images/robsalmon.jpg',
                },
              },
            },
          ],
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
