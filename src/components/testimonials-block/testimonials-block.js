import React from 'react'
import PropTypes from 'prop-types'

import styles from './testimonials-block.module.scss'
import QuoteSlider from '../quote-slider/quote-slider'

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

          <QuoteSlider quotes={testimonials} />
        </div>
      </div>
    )
  }

  changeSlide = index => {
    this.setState({ currentIndex: index })
  }
}

TestimonialsBlock.propTypes = {
  logos: PropTypes.array,
  testimonials: PropTypes.array.isRequired,
  className: PropTypes.string,
  sectionTitle: PropTypes.string.isRequired,
}

TestimonialsBlock.defaultProps = {
  testimonials: [],
  className: '',
  sectionTitle: 'Clients',
}

export default TestimonialsBlock
