// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import BlogPostPage from './blog-post'

storiesOf('Pages', module).add('Blog Post', () => {
  return (
    <BlogPostPage
      title="The simple hack to make meetings better"
      author={{
        avatar: require('@images/will.jpg'),
        name: 'Olly Willans',
        role: 'Creative Director',
      }}
      datePublished={Date.now()}
      readTime={9}
      tags={[
        { label: 'Digital Products', href: '#' },
        { label: 'Design Sprint', href: '#' },
      ]}
      streamfield={[
        {
          type: 'intro',
          value:
            '<p>From tomorrow, score every meeting. Score it out of ten at the end of the meeting. Not just you, all participants. Do it for client meetings too. Nothing below a score of eight counts as a good meeting.</p><p>Scoring meetings won&#x27;t instantly make them better. But it&#x27;ll make you try to run better meetings. I&#x27;ve gathered six meeting principles that can help. But first, allow me to frame it with some thinking around meetings...</p>',
        },
        {
          type: 'h2',
          value: 'The two types of meeting',
        },
        {
          type: 'paragraph',
          value:
            '<p>There are two types of meeting:</p><ul><li>meetings where you make decisions</li><li>meetings where you update people on stuff (status updates, stand-ups and information presentations)</li></ul><p>OK, <a href="https://www.atlassian.com/blog/teamwork/types-of-meetings">there are lots more</a> but, whatever.</p><p></p><p>Right, that&#x27;s the framing done, efficient eh. Let&#x27;s move on.</p>',
        },
        {
          type: 'h2',
          value:
            '1. Try everything you can to reduce the number of meetings you hold',
        },
        {
          type: 'paragraph',
          value:
            '<p>It&#x27;s not just me saying this. Simon Jenkins, in the Guardian <a href="https://www.theguardian.com/commentisfree/2017/sep/14/death-hope-productivity-meeting-organisations">tirades against meetings</a>. He even quotes the Get Britain Standing campaign who claim they are as bad for you as smoking!</p>',
        },
        {
          type: 'pullquote',
          value: {
            quote:
              '"Crushing morale, killing productivity – why do offices put up with meetings?"',
            attribution: 'Simon Jenkins',
          },
        },
        {
          type: 'h2',
          value: '2. Prepare!',
        },
        {
          type: 'paragraph',
          value:
            '<p></p><p>Don&#x27;t hold meetings you haven&#x27;t prepared for! Either postpone or knowingly waste your time and everyone else&#x27;s - a devastating outcome for a busy team.<br/></p><p>The few 9+ scored meetings I have run recently have been preceded with a shared agenda created using <a href="https://www.dropbox.com/en_GB/features/content-collaboration/meeting-minutes-template">Dropbox Paper&#x27;s Agenda template</a>. I love it. It&#x27;s already set up for you, it&#x27;s collaborative, and it integrates brilliantly <a href="https://www.dropbox.com/help/paper/calendar">with Google Calendar</a> to make it super-simple to invite people. Do it well in advance and give people a chance to suggest builds.</p>',
        },
        {
          type: 'h2',
          value: '3. Seriously, prepare!',
        },
        {
          type: 'paragraph',
          value:
            '<p></p><p>In his latest <a href="https://www.sec.gov/Archives/edgar/data/1018724/000119312518121161/d456916dex991.htm">Amazon shareholder letter</a>, Jeff Bezos shared how their execs need to write an explanatory six-page memo before an idea is discussed. Then they read it together in the meeting &quot;...we silently read one at the beginning of each meeting in a kind of “study hall.”<br/></p><p>We want a culture where everyone is prepared, not just the meeting owner. For example, in a sprint stand-up, I believe everyone should have prepped their report in advance. A few lucky people &#x27;wing-it&#x27; well, but everyone does it better when they have thought it through.</p>',
        },
        {
          type: 'h2',
          value: '4. Maintain focus in meetings',
        },
        {
          type: 'paragraph',
          value:
            '<p></p><p>Enforce a &quot;no devices&quot; rule for everyone, including senior management. &quot;Studies have shown that people who use a laptop during things like lectures and meetings can be so distracted that it’s almost as if they aren’t present at all.&quot; And, start <a href="https://www.nytimes.com/2018/12/02/smarter-living/be-more-productive-hide-your-phone.html">hiding your phone</a> too.<br/></p><p>Stay focussed on the solutions rather than the issues. Before discussing something, work out what you want from the discussion: &quot;there&#x27;s an issue with ..., we need to decide...&quot;.<br/></p><p>Schedule shorter meetings. Half an hour not an hour. Stick to a tight agenda. Use a visible timer like a <a href="https://www.timetimer.com/">Time Timer</a> to keep to time on each agenda item. And, use Google Calendar&#x27;s Speedy Meetings setting to set the meeting default for 50 minutes rather than an hour, so people with back-to-back meetings (hopefully no one!) aren&#x27;t late or ill-prepared.</p>',
        },
        {
          type: 'h2',
          value: '5. Use a decision-making framework',
        },
        {
          type: 'paragraph',
          value:
            '<p>Poorly structured meetings are a terrible way to decide things. Decision-making frameworks make it much easier.</p><p>I&#x27;m a fan of <a href="https://www.fastcompany.com/3034772/note-and-vote-how-google-ventures-avoids-groupthink-in-meetings">&#x27;note and vote&#x27;</a>. We use it in design sprints. It gets the best out of everyone in the meeting, it&#x27;s multi-threaded rather than just listening to one voice at a time, and gets everyone inputting.</p><p>For bigger decisions, the Berlin agency AJ&amp;Smart has created a meeting format using &#x27;note and vote&#x27; called the <a href="https://www.youtube.com/watch?v=33hBnZzoFAg">Lightning Decision Jam</a>. Atlassian also has one called <a href="https://www.atlassian.com/team-playbook/plays/daci">DACI</a>.</p><p>Common to these is the concept of a decider. Consensus-building is slow, draining and often results in compromise. Appoint a decider, and get them to make a decision. Then commit to it.</p><p>Back to Bezos, who in <a href="https://www.sec.gov/Archives/edgar/data/1018724/000119312517120198/d373368dex991.htm">another shareholder letter</a> coined the phrase &quot;disagree and commit&quot; when talking about the challenge of making high quality, high-velocity decisions. It plays well with the &#x27;decider&#x27; concept. We want to make good decisions, fast, and then get behind them.</p>',
        },
        {
          type: 'h2',
          value:
            "6. Ditch status meetings and update people via 'shared docs' instead",
        },
        {
          type: 'paragraph',
          value:
            '<p></p><p>I say this provocatively, perhaps in hope rather than expectation. Sure, there&#x27;s a team-building role for these meetings, but meetings are only team-building when meetings are great. Otherwise, they&#x27;re team-draining! Instead, write quick, clear, bullet-pointed updates that people can read when it suits them.</p><p></p><p>We have a number of agile coaches and delivery managers, who will, I suspect, defend the role of the stand-up, and they are the experts, so perhaps I&#x27;ll restrict myself to a plea that if you do stand-up, write yourself a bullet-point update first, so you can update effectively.<br/></p><p>The status meeting does have some pretty serious critics, 37 Signals CEO, Jason Fried claims that <a href="https://m.signalvnoise.com/status-meetings-are-the-scourge-39f49267ca90">status updates are the scourge</a>: &quot;A status meeting — sometimes called a stand-up —is a meeting where a bunch of people get together in a room (or virtually via video chat) and speak one at a time. Someone gets the floor, they fill the group in on something that’s going on, then they cede the floor to someone else who does the same thing. One after another, around they go.</p><p>It’s hard to come up with a bigger waste of money, time, or attention than status meetings.&quot;</p><p></p><p>They don&#x27;t do meetings at Basecamp, he says, they use Basecamp instead. And, they ferociously guard the eight-hour working day of their staff for doing their actual jobs. Pretty cool.<br/></p><p>That&#x27;s it. Meeting scores, please. Eight out of ten is the pass rate.</p>',
        },
      ]}
      blogs={[
        {
          title: 'We’ve dropped Drupal.',
          authorName: 'Paul Vetch',
          authorRole: 'Client Services Director',
          authorAvatar: require('@images/will.jpg'),
        },
        {
          title: 'We’ve dropped Drupal.',
          authorName: 'Paul Vetch',
          authorRole: 'Client Services Director',
          authorAvatar: require('@images/will.jpg'),
        },
      ]}
      teasers={[
        {
          image: require('@images/tbx-flame.svg'),
          title: ['Wagtail CMS', <br />, 'services'],
          description: 'For web builds with the Wagtail open source CMS',
          link: '#',
        },
        {
          image: require('@images/tbx-flame.svg'),
          title: ['Data', <br />, 'marketing'],
          description: 'For our data driven digital marketing services',
          link: '#',
        },
      ]}
    />
  )
})
