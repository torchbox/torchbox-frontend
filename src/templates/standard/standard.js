// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import Contact from '@components/contact-detailed'
import StreamfieldBlock from '@components/streamfield-block/streamfield-block'
// Styles
import styles from './standard.module.scss'

export class StandardPage extends React.Component {
  render() {
    const { title, body } = this.props
    return (
      <div className={styles.page}>
        <TitleBlock className={styles.pageTitle} title={title} />
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={body}
        />
        <Contact className={styles.pageContact} />
      </div>
    )
  }
}

StandardPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.array,
}

StandardPage.defaultProps = {
  title: '',
  body: [],
}

export default StandardPage
