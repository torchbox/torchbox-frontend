import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Avatar from '../avatar'

import styles from './contact.module.scss'

const Contact = ({ title, emailAddress, phoneNumber, className, avatar }) => (
  <div className={[styles.contactBlock, className].join(' ')}>
    <div className={styles.contactBlockContent}>
      <Avatar containerClassName={styles.contactBlockImage} src={avatar} />

      <div className={styles.contactBlockDetails}>
        <h3 className={styles.contactBlockTitle}>{title}</h3>
        <a
          href={`mailto://${emailAddress}`}
          className={styles.contactBlockEmail}
        >
          {emailAddress}
        </a>
        <a href={`tel://${phoneNumber}`} className={styles.contactBlockNumber}>
          {phoneNumber}
        </a>
      </div>
    </div>
  </div>
)

Contact.propTypes = {
  title: PropTypes.string,
  emailAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  className: PropTypes.string,
  avatar: PropTypes.string,
}

Contact.defaultProps = {
  title: 'Get in touch about your project',
  className: '',
  emailAddress: 'will@torchbox.com',
  name: 'Will Heinemen',
  phoneNumber: '+41524204242',
  role: 'Head of new buisness',
  avatar: require('../../images/will.jpg'),
}

export default Contact
