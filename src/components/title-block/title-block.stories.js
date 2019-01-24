import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'

import TitleBlock from './title-block'
import styles from './title-block.module.scss'

const store = new Store({
  title: 'Meet the team, your swell digital pals.'
})

storiesOf('Shared Components', module).add('Title Block', () => {
  const { title } = store.state

  const renderFormattedText = text => {
    let formattedText = [],
        isCurrentlyBold = false

    for(let i = 0; i < text.length; i++) {
      const char = text[i]

      switch (char) {
        case '*':
          formattedText.push(isCurrentlyBold ? '</strong>' : '<strong>')
          isCurrentlyBold = !isCurrentlyBold
          break

        case '[':
          formattedText.push(`<span class='${styles.accentedText}'>`)
          break

        case ']':
          formattedText.push('</span>')
          break

        default:
          formattedText.push(char)
          break
      }

    }

    return formattedText
  }

  const updateTitle = event => {
    const title = renderFormattedText(event.target.value)
    store.set({ title: title.join('') })
  }

  return (
    <State store={store}>
      <TitleBlock title={<div dangerouslySetInnerHTML={title} />}/>
      <div style={helper.container}>
        <label style={helper.label}>Type Here:</label>
        <input style={helper.input} defaultValue={title} onChange={updateTitle}/>
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
  }

}
