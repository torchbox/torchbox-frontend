// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import { ReactComponent as QuoteIcon } from '@images/icons/quote.svg'
// Styles
import styles from './quote-slider.module.scss'

class QuoteSlider extends React.Component {
  state = { currentIndex: 0 }

  componentDidMount() {
    this.setTimer()
  }

  componentDidUnmount() {
    clearInterval(this.timer)
  }

  setTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      const { currentIndex } = this.state
      const { quotes } = this.props

      const nextSlideIndex =
        currentIndex == quotes.length - 1 ? 0 : currentIndex + 1

      this.changeSlide(nextSlideIndex)
    }, 4000)
  }

  render() {
    const { currentIndex } = this.state
    const { quotes, className } = this.props
    return (
      <div className={[styles.quoteSliderBlock, className].join(' ')}>
        <QuoteIcon className={styles.quoteIcon} />
        <div className={styles.quoteSlider}>
          <div className={styles.quoteSlides}>
            {quotes.map((quote, index) => (
              <blockquote
                key={`quote-slide-${index}`}
                className={
                  currentIndex == index
                    ? styles.quoteSlideActive
                    : styles.quoteSlide
                }
              >
                <p className={styles.quoteSlideQuote}>{quote.quote}</p>
                <cite className={styles.quoteSlideCite}>
                  <span className={styles.quoteSlideCiteName}>
                    {quote.name}
                  </span>
                  <span className={styles.quoteSlideCiteRole}>
                    {quote.role}
                  </span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
        {quotes.length > 1 ? (
          <ul className={styles.quoteSliderBullets}>
            {quotes.map((quote, index) => (
              <li
                key={`quote-bullet-${index}`}
                onClick={() => this.changeSlide(index)}
                className={
                  index == currentIndex
                    ? styles.quoteSliderBulletActive
                    : styles.quoteSliderBullet
                }
              />
            ))}
          </ul>
        ) : null}
      </div>
    )
  }

  changeSlide = index => {
    this.setState({ currentIndex: index })
    this.setTimer()
  }
}

QuoteSlider.propTypes = {
  quotes: PropTypes.array,
  className: PropTypes.string,
}

QuoteSlider.defaultProps = {
  quotes: [],
  className: '',
}

export default QuoteSlider
