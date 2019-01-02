import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar'
import styles from './contact.module.scss'

const Contact = ({ email, number, className, reasons }) => (
  <div className={[styles.contactBlock, className].join(' ')}>
    <div className={styles.contactBlockContainer}>

      {reasons.length > 0 ?
        <div className={styles.contactBlockReasons}>
          <h1>3 reasons to get in touch</h1>
          <ul className={styles.contactBlockReasonsList}>
            {reasons.map((reason, index) => (
              <li className={styles.contactBlockReasonsItem}>
                <div className={styles.contactBlockReasonsItemNum}>
                  <span>{index+1}</span>
                </div>
                <h2 className={styles.contactBlockReasonsItemTitle}>{reason.title}</h2>
                <p className={styles.contactBlockReasonsItemText}>{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      :null}

      <section className={styles.contactBlockDetails}>
          <Avatar
            containerClassName={styles.contactBlockDetailsImage}
            src={require('../../images/will.jpg')}
          />
          <div className={styles.contactBlockDetailsMeta}>
            <a href={`mailto://${email}`} className={styles.contactBlockDetailsEmail}>
              {email}
            </a>
            <a href={`tel://${number}`} className={styles.contactBlockDetailsNumber}>
              {number}
            </a>
          </div>
      </section>
    </div>
  </div>
)

Contact.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  className: PropTypes.string,
  reasons: PropTypes.array,
}

Contact.defaultProps = {
  title: '',
  email: '',
  number: '',
  className: '',
  reasons: []
}

export default Contact
