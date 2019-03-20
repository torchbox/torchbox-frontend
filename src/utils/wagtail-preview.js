// Vendor Modules
import React from 'react'
import { request } from 'graphql-request'
import qs from 'query-string'
// Fragments
import { previewFragments } from '../fragments'

const WagtailPreviewProvider = previewMappings => {
  return class WagtailPreviewDecorator extends React.Component {
    state = { Template: null, propOverides: null }

    componentDidMount() {
      this.fetchToken()
    }

    fetchToken = async () => {
      if (typeof window !== `undefined`) {
        const { pageContext } = this.props
        const { token, content_type } = qs.parse(window.location.search)

        const previewMapping = previewMappings[content_type]
        if (token && previewMapping) {
          this.setState({ Template: previewMapping.template })
          const query = previewFragments + previewMapping.query
          try {
            const wagtail = await request(
              process.env.GATSBY_WAGTAIL_ENDPOINT ||
                'http://localhost:8000/graphql/',
              query,
              { ...pageContext, previewToken: token }
            )
            this.setState({
              propOverides: { ...this.state.propOverides, data: { wagtail } },
            })
          } catch (e) {
            console.log(e)
          }
        }
      }
    }

    render() {
      const { Template, propOverides } = this.state
      if (propOverides !== null && Template !== null) {
        return <Template {...this.props} {...propOverides} />
      }
      return null
    }
  }
}

export default WagtailPreviewProvider
