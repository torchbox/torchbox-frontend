// Vendor Modules
import React from 'react'
import { request } from 'graphql-request'
import qs from 'query-string'
import { APIClient, initCommentsApp } from 'wagtail-review-ui';

// Fragments
import { previewFragments } from '../fragments'


const WagtailPreviewProvider = previewMappings => {
  return class WagtailPreviewDecorator extends React.Component {
    state = { Template: null, propOverides: null }

    componentDidMount() {
      this.fetchToken()
    }

    fetchToken = async () => {
      if (typeof window !== 'undefined') {
        const { pageContext } = this.props
        const { token, content_type, review_token, allow_responses } = qs.parse(window.location.search)

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
            }, () => {
              // Initialise review UI
              if (review_token) {
                let commentsElement = document.createElement('div');
                document.body.appendChild(commentsElement);

                const reviewEndpoint = process.env.GATSBY_WAGTAIL_REVIEW_ENDPOINT || 'http://localhost:8000/review/api/';

                let commentsApi = new APIClient(reviewEndpoint, review_token);
                initCommentsApp(commentsElement, commentsApi, function (addAnnotatableSection) {
                    for (let element of document.querySelectorAll('[data-contentpath-field]')) {
                        addAnnotatableSection(element.dataset.contentpathField, element);
                    }
                }, !!allow_responses);
              }
            });
          } catch (e) {
            console.error(e)
          }
        }
      }
    }

    render() {
      const { Template, propOverides } = this.state
      if (propOverides !== null && Template !== null) {
        return <Template {...this.props} {...propOverides} />
      }

      return <p>Rendering preview...</p>
    }
  }
}

export default WagtailPreviewProvider
