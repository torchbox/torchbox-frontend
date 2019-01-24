import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'

const store = new Store({
  collapsed: false,
})

import Hero from './hero'
import styles from './hero.module.scss'

const HeroComp = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      if (!store.state.collapsed) {
        store.set({ collapsed: true })
      }
    } else {
      if (store.state.collapsed) {
        store.set({ collapsed: false })
      }
    }
  })

  return (
    <State store={store}>
      <Hero
        collapsed={store.state.collapsed}
        links={[
          { href: '#1', title: 'How can we help' },
          { href: '#1', title: 'Testimonials' },
          { href: '#1', title: 'Our process' },
          { href: '#1', title: 'Case studies' },
          { href: '#1', title: 'Out thinking' },
        ]}
      />
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: 180,
          fontSize: 50,
          height: '200vh',
          width: '100vw',
        }}
      >
        😍 START SCROLLING!!
      </div>
    </State>
  )
}

storiesOf('Landing Page', module)
  .add('Hero block', HeroComp)
  .add('Hero Block (Dark Theme)', () => (
    <div className={styles.darkTheme}>
      <HeroComp />
    </div>
  ))
