// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'

import { pageUrl } from '@utils/urls'

export default class RichText extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  }

  state = {
    processedHTML: ''
  }

  componentDidMount() {
    this.parseAnchorsInHTML()
  }

  render() {
    const { className } = this.props
    const { processedHTML } = this.state
    return <div className={className} dangerouslySetInnerHTML={{ __html: processedHTML }} />
  }

  parseAnchorsInHTML() {
    // This can be run during the runtime only due to use of web browser's API,
    // i.e. "document".
    const el = document.createElement( 'body' )
    el.innerHTML = this.props.value

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
    this.setState({ processedHTML: el.innerHTML })
  }
}
