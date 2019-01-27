import React from 'react'
import PropTypes from 'prop-types'

import styles from './quote-slider.module.scss'

class QuoteSlider extends React.Component {
  state = { currentIndex: 0 }

  render() {
    const { currentIndex } = this.state
    const { quotes, className } = this.props
    const currentQuote = quotes[currentIndex] || {}
    return (
      <div className={[styles.quoteSliderBlock, className].join(' ')}>
        <img
          src={require('../../images/icons/quote.svg')}
          className={styles.quoteIcon}
        />

        <div className={styles.quoteSlider}>
          <div className={styles.quoteSlides}>
            {quotes.map((quote, index) => (
              <blockquote
                className={
                  currentIndex == index
                    ? styles.quoteSlideActive
                    : styles.quoteSlide
                }
              >
                <p className={styles.quoteSlideQuote}>{quote.quote}</p>
                <cite className={styles.quoteSlideCite}>
                  <span className={styles.quoteSlideCiteAuthor}>
                    {quote.person}
                  </span>
                  {quote.role}
                </cite>
              </blockquote>
            ))}
          </div>

          {quotes.length > 1 ? (
            <ul className={styles.quoteSliderBullets}>
              {quotes.map((quote, index) => (
                <li
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
      </div>
    )
  }

  changeSlide = index => {
    this.setState({ currentIndex: index })
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
