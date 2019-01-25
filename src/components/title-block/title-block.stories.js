import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'

import TitleBlock from './title-block'
import { parseToHtml } from '../../utils/torchup'


const store = new Store({
  title: 'Meet the team, your swell digital pals.',
})

storiesOf('Shared Components', module).add('Title Block (+ Test TorchUp)', () => {
  const { title } = store.state

  const updateTitle = event => {
    store.set({ title: event.target.value })
  }

  return (
    <State store={store}>
      <TitleBlock title={title}/>
      <div style={helper.container}>
        <label style={helper.label}>Type Here:</label>
        <input style={helper.input} defaultValue={title} onChange={updateTitle}/>
      </div>
      <div style={helper.codeContainer}>
        <div style={helper.code}>
          // TorchUp Syntax:<br/>
          *foo* => foo (in bold)<br/>
          {'{ foo }'} => foo (in heavy-bold/black)<br/>
          [ foo ] => foo (with text in accent color)<br/>
          \ => Escape next special character
        </div>
      </div>
    </State>
  )
})

const helper = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 40,
    paddingBottom: 20,
    backgroundColor: '#3BECCD'
  },

  label: {
    fontWeight: '800',
    opacity: 0.7,
    marginBottom: 20,
    marginRight: 20,
  },

  input: {
    flexGrow: 1,
    minWidth: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    border: 'none',
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
    color: 'white',
    padding: '5px 10px',
    fontSize: 16,
    fontWeight: 600,
  },

  codeContainer: {
    padding: 40,
    paddingBottom: 20,
    backgroundColor: '#fd5765',

  },

  code: {
    background: 'rgba(0, 0, 0, 0.15)',
    color: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 3,
    padding: 10,
    width: '100%'
  }

}
