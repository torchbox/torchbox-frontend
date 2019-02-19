// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import BustOut from '@components/bustout'
import QuoteSlider from '@components/quote-slider/quote-slider'
// Styles
import styles from './streamfield-block.module.scss'

class StreamfieldBlock extends React.Component {
  render() {
    const { streamfield, className } = this.props
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
              const aligned_image = React.createRef()
              return (
                <div className={styles.streamfieldAlignedImage}>
                  <img
                    ref={aligned_image}
                    src={block.value.image.src}
                    alt={block.value.image.alt}
                    className={styles.streamfieldAlignedImageImg}
                    onError={() => {
                      aligned_image.current.src = require('@images/will.jpg')
                    }}
                  />
                  <div className={styles.streamfieldAlignedImageCaption}>
                    <p>{block.value.caption}</p>
                  </div>
                </div>
              )

            case 'wide_image':
              const wide_image = React.createRef()
              return (
                <div className={styles.streamfieldWideImage}>
                  <img
                    ref={wide_image}
                    src={block.value.image.src}
                    alt={block.value.image.alt}
                    onError={() => {
                      wide_image.current.src = require('@images/default-featured.png')
                    }}
                  />
                </div>
              )

            case 'bustout':
              return (
                <BustOut
                  src={block.value.image.src}
                  align={block.value.alignment}
                  title={'TODO: Ask about title'} // TODO
                  caption={block.value.text}
                />
              )

            case 'h1':
              return (
                <h1 className={styles.streamfieldHeading}>{block.value}</h1>
              )

            case 'h2':
              return (
                <h2 className={styles.streamfieldHeading}>{block.value}</h2>
              )

            case 'h3':
              return (
                <h3 className={styles.streamfieldHeading}>{block.value}</h3>
              )

            case 'h4':
              return (
                <h4 className={styles.streamfieldHeading}>{block.value}</h4>
              )

            case 'h5':
              return (
                <h5 className={styles.streamfieldHeading}>{block.value}</h5>
              )

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
                      name: block.value.attribution,
                      role: '',
                      quote: block.value.quote,
                    },
                  ]}
                />
              )

            case 'paragraph':
              return (
                <div
                  className={styles.streamfieldParagraph}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              )

            case 'raw_html':
              return <div 
              className={styles.streamfieldRaw}
              dangerouslySetInnerHTML={{ __html: block.value }} />

            case 'markdown':
              return null

            default:
              console.log('Unknown Streamfield Block: ', block.type)
              return null
          }
        })}
      </div>
    )
  }
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
