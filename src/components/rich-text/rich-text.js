// Vendor Modules
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { pageUrl } from '@utils/urls'

const RichText = (props) => {
  const [newValue, setNewValue] = useState(props.value)

  // Need to encompass document on the runtime only.
  useEffect(() => {
    const el = document.createElement( 'body' )
    el.innerHTML = props.value

    // Set "href" for page links.
    for (const link of el.querySelectorAll('a[data-page-slug][data-page-type]')) {
      const url = pageUrl({
        type: link.dataset.pageType,
        slug: link.dataset.pageSlug,
        serviceSlug: link.dataset.pageServiceSlug
      })
      link.href = url
      delete link.dataset.pageType
      delete link.dataset.pageSlug
      delete link.dataset.pageServiceSlug
    }
    setNewValue(el.innerHTML)
  })


  return <div dangerouslySetInnerHTML={{ __html: newValue }} />
}

RichText.propTypes = {
  value: PropTypes.string
}

export default RichText
