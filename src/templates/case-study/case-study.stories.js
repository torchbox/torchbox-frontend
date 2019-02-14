// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import CaseStudyPage from './case-study'

storiesOf('Pages', module).add('Case Study', () => {
  return (
    <CaseStudyPage
      title="Relaunching Nesta on a platform for the future"
      author={{
        avatar: require('../../images/will.jpg'),
        name: 'Olly Willans',
        role: 'Creative Director',
      }}
      tags={[
        { label: 'Digital Products', href: '#' },
        { label: 'Design Sprint', href: '#' },
      ]}
      readTime={8}
      streamfield={[
        {
          type: 'intro',
          value:
            '<p>Before we made the decision to <a id="1186" linktype="page">stop working with Drupal</a> we got a brief through the door that made us think twice.</p>',
        },
        {
          type: 'paragraph',
          value:
            '<p>Nesta, the global innovation foundation (they&#x27;re pretty much our perfect client, our strapline is <i>digital for good</i> and Nesta are all about innovation for good) wanted to transform their digital presence, building a new nesta.org.uk on a next generation platform.</p>',
        },
        {
          type: 'h3',
          value: 'Wagtail or Drupal?',
        },
        {
          type: 'paragraph',
          value:
            '<p>The thing was, the Nesta brief indicated an expectation of Drupal 8 as the platform they wanted to build on. And, while we hadn&#x27;t formerly dropped Drupal by then, we knew we were headed that way, recognising that it wasn&#x27;t as good a platform as Wagtail.</p><p>Nesta hadn&#x27;t closed the door on other open source systems (they are committed to open source), so, although we could have pitched D8, we took the risk and pitched Wagtail - we felt it was the right thing to do for Nesta and we were freshly boosted by the <a href="https://digital.nhs.uk/blog/transformation-blog/2018/nhs.uk-content-migration-update">high-profile relaunch of NHS.uk on Wagtail</a>.</p>',
        },
        {
          type: 'pullquote',
          value: {
            quote:
              'We were looking for a platform that can do what we need now, but one that can also do much more, to set us up for the future.',
            attribution: 'Sara Rizk, Head of Digital, Nesta',
          },
        },
        {
          type: 'paragraph',
          value:
            '<p>One thing that we felt certain about was that Wagtail was a better platform for the future, so we focused on:</p><ul><li><b>The underlying technologies -</b> Django and Python have <a href="https://stackoverflow.blog/2017/09/06/incredible-growth-python/">an important and growing profile within technology space</a> while PHP by comparison is dwindling. They will allow us to innovate, quickly and effectively. (We also knew that Nesta has a strong pool of in-house data scientists who use Python to produce <a href="https://www.nesta.org.uk/data-visualisation-and-interactive/">a range of interactive data visualisations</a> - a key goal of the project was to more tightly integrate these into the main site).</li></ul>',
        },
        {
          type: 'aligned_image',
          value: {
            image: {
              id: 2399,
              alt: 'The Incredible Growth of Python - Stack Overflow',
            },
            alignment: 'full',
            caption:
              'The Incredible Growth of Python, September 6, 2017: https://stackoverflow.blog/2017/09/06/incredible-growth-python/',
            attribution: '',
          },
        },
        {
          type: 'pullquote',
          value: {
            quote:
              'Python is fast enough for our site and allows us to produce maintainable features in record times, with a minimum of developers',
            attribution: 'Cuong Do, Software Architect, YouTube.com',
          },
        },
        {
          type: 'paragraph',
          value:
            '<ul><li><b>Personalisation capabilities -</b> personalisation, or customer experience, will trickle down over time to play a more important role in more and more sites. Wagtail already has <a href="https://torchbox.com/blog/magic-personalisation/">some exciting personalisation tools</a> that are powerful and free.</li><li><b>Creative solutions drawn from insights into their users -</b> we focused on combining personalisation with feature ideas to show how we imagine the next generation Nesta site will work, for example, how we would handle really long, long-form content.</li></ul>',
        },
        {
          type: 'paragraph',
          value:
            '<p>Nesta ruled out a number of agencies with too much of a focus on technology. They wanted a partner that focused on their challenges, their audiences, and that would give pushback where needed. Happily, Nesta chose us and Wagtail.<br/></p>',
        },
        {
          type: 'h3',
          value: 'What were the biggest worries?',
        },
        {
          type: 'paragraph',
          value:
            '<p>Nesta&#x27;s key project concerns were around:</p><ul><li>A successful, digital implementation of <a href="https://www.pentagram.com/work/nesta">their new brand by Pentagram</a></li><li>Content migration (with nearly 5k templates, this is a big site!)</li><li>Their distributed CMS editor base having to move from D7 to another system</li></ul><p>We&#x27;re delighted that all of these key concerns were successfully met. Nesta love the brand implementation. Nesta product manager, Sara, felt that the migration went &quot;really well, much more smoothly than previous experiences&quot; (346 person templates, 125 users, 467 guest authors, 1616 blogs, 561 reports and 35 toolkits). But, perhaps most pleasing was how easily their editors adopted Wagtail.</p><p>More than fifty editors are already using Wagtail at Nesta, and the feedback has been overwhelmingly positive, &quot;it&#x27;s been very easy for people to pick up&quot;. Just as well as some of these editors only use a CMS a couple of times a year so switching might have been annoying. People have loved moving from the world of the <i>big text area</i> style of CMS publishing to something with the flexibility of Wagtail&#x27;s Streamfield, only one person has missed being able to dump all their content into one text box (with the many associated problems that brings).</p><p></p>',
        },
        {
          type: 'aligned_image',
          value: {
            image: {
              id: 2403,
              alt: 'Nesta Design Development',
            },
            alignment: 'full',
            caption:
              'From wireframing to developing and evolving the new Nesta brand',
            attribution: '',
          },
        },
        {
          type: 'h3',
          value: 'Tell me something else about the site?',
        },
        {
          type: 'paragraph',
          value:
            '<p>There&#x27;s an interesting and unusual information architecture, there are some cool data visualisations, but if you want to check out one thing, I suggest you check out the long form content pieces like <a href="https://www.nesta.org.uk/report/flying-high-challenge-future-of-drone-technology-in-uk-cities/">Flying High: The future of drone technology in UK cities</a>. It&#x27;s really long, long-form content, twenty-odd chapters, but it comes together really well as a piece of content that&#x27;s easily managed within Wagtail. It&#x27;s actually changing the way that Nesta think about the source material and how to produce it (Nesta produces 60-80 long-form publications every year including reports, policy briefings, landscape reviews and practice guides).<br/></p><p></p><p><i>We also built a prototype feature that keeps your place in these long form content docs across multiple visits, so we&#x27;d like to add that in too!</i></p>',
        },
        {
          type: 'embed',
          value: {
            url: 'https://youtu.be/ebs_lHlYi_4',
          },
        },
        {
          type: 'h3',
          value: 'What now?',
        },
        {
          type: 'paragraph',
          value:
            '<p>As Sara says, “it was never our intention that launch would be it. A program of user testing is imminent on the live site and then we’ll be starting with the iterative improvements and innovations.”</p><p>We’re looking forward to getting stuck in.</p>',
        },
      ]}
      caseStudies={[
        {
          client: 'YOUTH SPORT TRUST',
          title: 'Reimagining the School Games custom application',
          description:
            'School Games is a programme run by the Youth Sport Trust (YST) that delivers more than 3 million sporting opportunities for 5-18 year olds every year.',
          image:
            'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs3.jpg',
        },
        {
          client: 'MEDIAE',
          title: 'SMS support for Kenyan farmers',
          description:
            'iShamba, a custom SMS application, provides Kenyan farmers with access to the latest market prices, weather forecasts and agricultural tips. ',
          image:
            'http://playground.torchboxapps.com/tbx-rebrand/assets/images/cs1.jpg',
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
