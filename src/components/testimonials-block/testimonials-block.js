// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import QuoteSlider from '@components/quote-slider'
// Styles
import styles from './testimonials-block.module.scss'

class TestimonialsBlock extends React.Component {
  render() {
    const { testimonials, logos, className, sectionTitle } = this.props
    return (
      <div className={[styles.testimonials, className].join(' ')}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        <div className={styles.testimonialsContainer}>
          <section className={styles.testimonialsIconsBlock}>
            <ul className={styles.testimonialsIconsList}>
              {logos.map((logo, index) => (
                <li
                  key={`logo-${index}`}
                  className={styles.testimonialsIconsItem}
                  >
                  <div>
                    {/*to do: this should work with logo.image.alt instead of logo.labl but for some reason it is not being passed down through the props.*/}
                    <img src={logo.image.url} aria-label={logo.label} alt={logo.label} />
                  </div>
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
