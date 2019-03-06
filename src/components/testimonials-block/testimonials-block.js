// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import QuoteSlider from '@components/quote-slider'
// Styles
import styles from './testimonials-block.module.scss'

class TestimonialsBlock extends React.Component {
  render() {
    console.log(this.props.logos);
    const { testimonials, logos, className, sectionTitle } = this.props
    return (
      <div className={[styles.testimonials, className].join(' ')}>
        <div className={styles.testimonialsContainer}>
          <span className={styles.pageSectionTitle}>{sectionTitle}</span>

          <section className={styles.testimonialsIconsBlock}>
            <ul className={styles.testimonialsIconsList}>
              {logos.map((logo, index) => (
                <li
                  key={`logo-${index}`}
                  className={styles.testimonialsIconsItem}
                >
                  <img src={logo.image.url} aria-label={logo.label} alt={logo.label} />
                </li>
              ))}
            </ul>
          </section>

          <QuoteSlider quotes={testimonials} />
        </div>
      </div>
    )
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
