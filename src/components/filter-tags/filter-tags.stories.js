// Vendor Modules
import React from 'react'
import { storiesOf } from '@storybook/react'

import { State, Store } from '@sambego/storybook-state'
// Components
import FilterTags from './filter-tags'

const store = new Store({
  activeOption: 0,
})

storiesOf('Components/Shared Components', module).add('Filter Tags', () => {
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
          tags={['All', 'Digital Products', 'Wagtail', 'Data']}
          activeOption={store.state.activeOption}
          onChange={(option, index) => {
            store.set({ activeOption: index })
          }}
        />
      </State>
    </div>
  )
})
