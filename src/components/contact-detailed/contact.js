// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import Avatar from '@components/avatar'
// Styles
import styles from './contact.module.scss'
// Utils
import safeGet from '@utils/safeget'

const Contact = ({
  heading,
  emailAddress,
  phoneNumber,
  image,
  className,
  reasons,
}) => (
  <div className={[styles.contactBlock, className].join(' ')}>
    <div className={styles.contactBlockContainer}>
      
        <div className={styles.contactBlockReasons}>
          <h1>{heading}</h1>
          {reasons.length > 0 ? (
            <ul className={styles.contactBlockReasonsList}>
              {reasons.map((reason, index) => (
                <li
                  key={`contact-reason-${index}`}
                  className={styles.contactBlockReasonsItem}
                >
                  <div className={styles.contactBlockReasonsItemWrapper}>
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
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

      <section className={styles.contactBlockDetails}>
        <Avatar
          containerClassName={styles.contactBlockDetailsImage}
          src={safeGet(image, 'src.url', require('@images/default-avatar.png'))}
        />
        <div className={styles.contactBlockDetailsMeta}>
          <div>
            <a
              href={`mailto:${emailAddress}`}
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
  heading: PropTypes.string,
  emailAddress: PropTypes.string,
  phoneNumber: PropTypes.string,
  className: PropTypes.string,
  reasons: PropTypes.array,
  image: PropTypes.object,
}

Contact.defaultProps = {
  heading: '',
  emailAddress: '',
  phoneNumber: '',
  className: '',
  reasons: [],
}

export default Contact
