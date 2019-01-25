import React from 'react'
import { storiesOf } from '@storybook/react'

import FilterTags from './filter-tags'
import { State, Store } from '@sambego/storybook-state'

const store = new Store({
  activeOption: 0,
})


storiesOf('Shared Components', module).add('Filter Tags', () => {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        background: 'white',
        borderRadius: 5,
      }}
    >
      <State store={store}>
        <FilterTags
          options={['All', 'Digital Products', 'Wagtail', 'Data']}
          activeOption={store.state.activeOption}
          onChange={(option, index) => {
            store.set({ activeOption: index })
          }}/>
      </State>
    </div>
  )
})
