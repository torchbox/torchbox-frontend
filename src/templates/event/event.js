// Vendor Modules
import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
// Components
import TitleBlock from '@components/title-block'
import AuthorBlock from '@components/author-block'
import StreamfieldBlock from '@components/streamfield-block'
import Contact from '@components/contact-detailed'
import Blogs from '@components/blogs-listing-block'
// Utilities
import {format} from 'date-fns'
import { blogsUrl } from '@utils/urls'
// Styles
import styles from './event.module.scss'

const EventPage = ({
  title,
  strapline,
  hosts,
  body,
  event,
  postRegistrationBody,
  contact,
  contactReasons,
}) =>  {
  const [registrationStatus, setRegistrationStatus] = useState('form')
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  const submitRegistrationForm = async e => {
    // Stop form submitting
    e.preventDefault()
    // Construct url from event ID
    const url = `http://localhost:8000/api/events/${event?.eventType}/${event?.id}/register/`
    // Create blob from form
    const formData = new FormData(formRef.current)
    // Submit registration
    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData
      })
      // Update UI
      setRegistrationStatus('success')
    } catch {
      setRegistrationStatus('error')
    }

  }

  return (
    <div className={styles.page}>
      <div className={styles.pageStraplineContainer}>
        <span className={styles.pageStrapline}>{strapline}</span>
      </div>
      <TitleBlock
        className={styles.pageTitle}
        title={title}
        innerPage={true}
        contentPathField="title"
      />
      <div className={styles.pageHosts}>
        {hosts?.map(author => (
          <AuthorBlock
            className={styles.pageHostsPerson}
            author={author}
            tags={[]}
          />
        ))}
      </div>

      <div className={styles.pageEventDetails}>
        <div className={styles.pageEventDetail}>
          <h4>When is the event?</h4>
          <span>{format(new Date(event.startTime), 'EEEE do MMMM yyyy')}</span>
        </div>

        <div className={styles.pageEventDetail}>
          <h4>Where is the event?</h4>
          <span>{(event.eventType == "meeting" || event.eventType == "webinar") && "Online / Zoom" }</span>
        </div>

        <button className={styles.pageRegisterFieldButton} onClick={scrollToForm}>
          Register!
        </button>
      </div>

      <StreamfieldBlock
        className={styles.pageStreamfield}
        streamfield={body}
        contentPathField="body"
      />
      { (registrationStatus == "form" || registrationStatus == "error") && (
        <div className={styles.pageRegistration}>
          {/* Show registration form */}
            <form ref={formRef} className={styles.pageRegisterForm} onSubmit={submitRegistrationForm}>
              <h2>Register for Webinar</h2>
              <label className={styles.pageRegisterFieldLabel} htmlFor="email">Email:</label>
              <input className={styles.pageRegisterFieldInput} type="email" name="email" required={true} />

              <label className={styles.pageRegisterFieldLabel} htmlFor="first_name">First Name:</label>
              <input className={styles.pageRegisterFieldInput} type="text" name="first_name" required={true} />

              <label className={styles.pageRegisterFieldLabel} htmlFor="last_name">Last Name:</label>
              <input className={styles.pageRegisterFieldInput} type="text" name="last_name" required={true} />

              <label className={styles.pageRegisterFieldLabel} htmlFor="phone">Telephone:</label>
              <input className={styles.pageRegisterFieldInput} type="tel" name="phone" required={true} />

              <label className={styles.pageRegisterFieldLabel} htmlFor="job_title">Job Title:</label>
              <input className={styles.pageRegisterFieldInput} type="text" name="job_title" required={true} />

              <label className={styles.pageRegisterFieldLabel} htmlFor="industry">Industry:</label>
              <input className={styles.pageRegisterFieldInput} type="text" name="industry" required={true} />

              <button className={styles.pageRegisterFieldButton} type="submit">Register</button>
            </form>

          {/* Show error messafe */}
          { registrationStatus == "error" && (
            <h4>Something went wrong - Please try again later</h4>
          ) }
        </div>
      ) }
      {/* Show success message */}
      { registrationStatus == "success" && (
        <StreamfieldBlock
          className={styles.pageStreamfield}
          streamfield={postRegistrationBody}
          contentPathField="body"
        />
      )}
      <Contact className={styles.pageContact} {...contact} {...contactReasons} />
    </div>
  )
}

EventPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.object,
  datePublished: PropTypes.string,
  readTime: PropTypes.number,
  tags: PropTypes.array,
  streamfield: PropTypes.array,
  extraBlogPosts: PropTypes.array,
  contact: PropTypes.object,
  contactReasons: PropTypes.object,
}

EventPage.defaultProps = {
  tags: [],
  blogs: [],
  caseStudies: [],
  teasers: [],
  contact: {},
}

export default EventPage
