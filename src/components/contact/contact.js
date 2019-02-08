import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Avatar from '../avatar'

import styles from './contact.module.scss'

const Contact = ({ title, email, number, className, avatar }) => (
  <div className={[styles.contactBlock, className].join(' ')}>
    <div className={styles.contactBlockContent}>
      <Avatar containerClassName={styles.contactBlockImage} src={avatar} />

      <div className={styles.contactBlockDetails}>
        <h3 className={styles.contactBlockTitle}>{title}</h3>
        <a href={`mailto://${email}`} className={styles.contactBlockEmail}>
          {email}
        </a>
        <a href={`tel://${number}`} className={styles.contactBlockNumber}>
          {number}
        </a>
      </div>
    </div>
  </div>
)

Contact.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  className: PropTypes.string,
  avatar: PropTypes.string,
}

Contact.defaultProps = {
  title: 'Get in touch about your project',
  email: '',
  number: '',
  className: '',
  avatar: require('../../images/will.jpg'),
}

export default Contact
