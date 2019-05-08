// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
// Components
import CodeBlock from '@components/code-block'

const Markdown = ({ source }) => (
  <ReactMarkdown source={source}  renderers={{ code: CodeBlock }} />
)

Markdown.propTypes = {
  source: PropTypes.string,
}

export default Markdown
