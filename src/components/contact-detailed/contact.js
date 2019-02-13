import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../avatar'
import styles from './contact.module.scss'

const Contact = ({ title, emailAddress, phoneNumber, className, reasons }) => (
  <div className={[styles.contactBlock, className].join(' ')}>
    <div className={styles.contactBlockContainer}>
      {reasons.length > 0 ? (
        <div className={styles.contactBlockReasons}>
          <h1>{title}</h1>
          <ul className={styles.contactBlockReasonsList}>
            {reasons.map((reason, index) => (
              <li
                key={`contact-reason-${index}`}
                className={styles.contactBlockReasonsItem}
              >
                <div className={styles.contactBlockReasonsItemNum}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.contactBlockReasonsItemContent}>
                  <h2 className={styles.contactBlockReasonsItemTitle}>
                    {reason.title}
                  </h2>
                  <p className={styles.contactBlockReasonsItemText}>
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <section className={styles.contactBlockDetails}>
        <Avatar
          containerClassName={styles.contactBlockDetailsImage}
          src={require('../../images/will.jpg')}
        />
        <div className={styles.contactBlockDetailsMeta}>
          <div>
            <a
              href={`mailto://${emailAddress}`}
              className={styles.contactBlockDetailsEmail}
            >
              {emailAddress}
            </a>
          </div>
          <div>
            <a
              href={`tel://${phoneNumber}`}
              className={styles.contactBlockDetailsNumber}
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
)

Contact.propTypes = {
  title: PropTypes.string,
  emailAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  className: PropTypes.string,
  reasons: PropTypes.array,
}

Contact.defaultProps = {
  title: 'Get in touch to talk about your project',
  emailAddress: 'will@torchbox.com',
  phoneNumber: '+44 (0) 7545 468483',
  className: '',
  reasons: [
    {
      title: 'Your brief',
      description:
        'Get advice on the best way to structure your brief to set your project up for success',
    },
    {
      title: 'Your guarantee',
      description:
        'Find out about our reassuring guarantee that even procurement will love!',
    },
    {
      title: 'Our chemistry',
      description:
        'Ask me anything! Its good to make double sure we’re the right fit for you',
    },
  ],
}

export default Contact
