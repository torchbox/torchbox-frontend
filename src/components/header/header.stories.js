import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'
import { action, configureActions } from '@storybook/addon-actions'

import Header from './index'

const store = new Store({
  currentUrl: '#1',
})

storiesOf('Components/Shared Components', module).add('Header', () => {
  return (
    <State store={store}>
      <Header
        logoClick={action('Go to Homepage')}
        currentUrl={store.state.currentUrl}
        links={[
          {
            href: '#1',
            title: 'Digital product agency',
            strap: 'For digital design and engineering services',
            links: [
              { href: '#1', title: 'How can we help' },
              { href: '#1', title: 'Testimonials' },
              { href: '#1', title: 'Our process' },
              { href: '#1', title: 'Case studies' },
              { href: '#1', title: 'Out thinking' },
            ],
          },
          {
            href: '#2',
            title: 'Wagtail CMS',
            strap: 'For web builds with the Wagtail open source CMS',
            links: [
              { href: '#1', title: 'How can we help' },
              { href: '#1', title: 'Testimonials' },
              { href: '#1', title: 'Our process' },
              { href: '#1', title: 'Case studies' },
              { href: '#1', title: 'Out thinking' },
            ],
          },
          {
            href: '#3',
            title: 'Data + acquisition',
            strap: 'For our data driven digital marketing services',
            links: [
              { href: '#1', title: 'How can we help' },
              { href: '#1', title: 'Testimonials' },
              { href: '#1', title: 'Our process' },
              { href: '#1', title: 'Case studies' },
              { href: '#1', title: 'Out thinking' },
            ],
          },
          {
            href: '#4',
            title: 'Culture + Jobs',
            strap: 'For our data driven digital marketing services',
            alignRight: true,
            badge: 5,
          },
        ]}
        navigateTo={url => {
          action('Go to ' + url)
          store.set({ currentUrl: url })
        }}
      />
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: 290,
          fontSize: 50,
          height: '200vh',
          width: '100vw',
        }}
      >
        😍 START SCROLLING!!
      </div>
    </State>
  )
})
