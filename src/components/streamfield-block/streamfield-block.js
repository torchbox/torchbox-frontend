import React from 'react'
import PropTypes from 'prop-types'
import BustOut from '../bustout'

import styles from './streamfield-block.module.scss'
import QuoteSlider from '../quote-slider/quote-slider'

const StreamfieldBlock = ({ streamfield, className }) => {
  console.log(streamfield)
  return (
    <div className={[styles.streamfield, className].join(' ')}>
      {streamfield.map(block => {
        switch (block.type) {
          case 'intro':
            return (
              <div
                className={styles.streamfieldIntro}
                dangerouslySetInnerHTML={{ __html: block.value }}
              />
            )

          case 'aligned_image':
            return (
              <BustOut
                src={block.value.src}
                align={block.value.alignment}
                title={'TODO: Ask about title'} // TODO
                caption={block.value.caption}
              />
            )

          case 'h1':
            return <h1 className={styles.streamfieldHeading}>{block.value}</h1>

          case 'h2':
            return <h2 className={styles.streamfieldHeading}>{block.value}</h2>

          case 'h3':
            return <h3 className={styles.streamfieldHeading}>{block.value}</h3>

          case 'h4':
            return <h4 className={styles.streamfieldHeading}>{block.value}</h4>

          case 'h5':
            return <h5 className={styles.streamfieldHeading}>{block.value}</h5>

          case 'embed':
            return (
              <iframe
                className={styles.streamfieldEmbed}
                src={block.value.url}
              />
            )

          case 'pullquote':
            return (
              <QuoteSlider
                className={styles.streamfieldQuote}
                quotes={[
                  {
                    person: block.value.attribution,
                    role: '',
                    quote: block.value.quote,
                  },
                ]}
              />
            )

          case 'paragraph':
            return (
              <p
                className={styles.streamfieldParagraph}
                dangerouslySetInnerHTML={{ __html: block.value }}
              />
            )

          default:
            return (
              <div
                className={`block-${block.type}`}
                dangerouslySetInnerHTML={{ __html: block.value }}
              />
            )
        }
      })}
    </div>
  )
}

StreamfieldBlock.propTypes = {
  streamfield: PropTypes.array,
  className: PropTypes.string,
}

StreamfieldBlock.defaultProps = {
  streamfield: [],
  className: '',
}

export default StreamfieldBlock
