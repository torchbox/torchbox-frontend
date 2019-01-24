import React from 'react'
import PropTypes from 'prop-types'

import styles from './testimonials.module.scss'

class TestimonialsBlock extends React.Component {
  state = { currentIndex: 0 }

  render() {
    const { currentIndex } = this.state
    const { testimonials, logos, className, sectionTitle } = this.props
    const currentTestimonial = testimonials[currentIndex]

    return (
      <div className={[styles.testimonials, className].join(' ')}>
        <div className={styles.testimonialsContainer}>
          <span className={styles.pageSectionTitle}>{sectionTitle}</span>

          <section className={styles.testimonialsIconsBlock}>
            <ul className={styles.testimonialsIconsList}>
              {logos.map(logo => (
                <li className={styles.testimonialsIconsItem}>
                  <img src={logo.image} aria-label={logo.label} />
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.testimonialsBlock}>
            <img
              src={require('../../images/icons/quote.svg')}
              className={styles.testimonialsIcon}
            />

            <div className={styles.testimonialsSlider}>
              <blockquote className={styles.testimonialsSlide}>
                <p className={styles.testimonialsSlideQuote}>
                  {currentTestimonial.quote}
                </p>
                <cite className={styles.testimonialsSlideCite}>
                  <span className={styles.testimonialsSlideCiteAuthor}>
                    {currentTestimonial.person}
                  </span>
                  {currentTestimonial.role}
                </cite>
              </blockquote>

              <ul className={styles.testimonialsSliderBullets}>
                {testimonials.map((testimonial, index) => (
                  <li
                    onClick={() => this.changeSlide(index)}
                    className={
                      index == currentIndex
                        ? styles.testimonialsSliderBulletActive
                        : styles.testimonialsSliderBullet
                    }
                  />
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }

  changeSlide = index => {
    this.setState({ currentIndex: index })
  }
}

TestimonialsBlock.propTypes = {
  testimonials: PropTypes.array.isRequired,
  className: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired
}

TestimonialsBlock.defaultProps = {
  testimonials: [],
  className: '',
  sectionTitle: 'Clients'
}

export default TestimonialsBlock
