// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Components
import BustOut from '@components/bustout'
import QuoteSlider from '@components/quote-slider'
import RichText from '@components/rich-text'
import { ReactComponent as FragIcon } from '@images/frag-cluster3.svg'
import Markdown from '@components/markdown';
// Styles
import styles from './streamfield-block.module.scss'

class StreamfieldBlock extends React.Component {
  render() {
    const { streamfield, className, contentPathField } = this.props
    return (
      <div className={[styles.streamfield, className].join(' ')} data-contentpath-field={contentPathField}>
        {streamfield.map((block, index) => {
          switch (block.type) {
            case 'intro':
              return (
                <div
                  className={styles.streamfieldIntro}
                  key={`${block.type}-${index}`}
                >
                  <RichText value={block.value} />
                </div>
              )

            case 'aligned_image':
              const aligned_image = React.createRef()
              return (
                <div
                  className={styles.streamfieldAlignedImage}
                  key={`${block.type}-${index}`}
                >
                  <img
                    ref={aligned_image}
                    src={block.value.image.src}
                    alt={block.value.image.alt || ""}
                    className={styles.streamfieldAlignedImageImg}
                    onError={() => {
                      aligned_image.current.src = require('@images/default-featured.png')
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
                <div
                  className={styles.streamfieldWideImage}
                  key={`${block.type}-${index}`}
                >
                  <img
                    ref={wide_image}
                    src={block.value.image.src}
                    alt={block.value.image.alt}
                    onError={() => {
                      wide_image.current.src = require('@images/default-featured.png')
                    }}
                  />
                  <FragIcon className={styles.streamfieldWideImageIcon} />
                </div>
              )

            case 'bustout':
              {/* Note that the block.value.alignment is not something that is passed through or set in the cms, but leaving for now in case
                this is functionality to be added later */}
              return (
                <BustOut
                  src={block.value.image.src}
                  align={block.value.alignment}
                  caption={block.value.text}
                  key={`${block.type}-${index}`}
                />
              )

            case 'h1':
              return (
                <h1
                  className={styles.streamfieldHeading}
                  key={`${block.type}-${index}`}
                >
                  {block.value}
                </h1>
              )

            case 'h2':
              return (
                <h2
                  className={styles.streamfieldHeading}
                  key={`${block.type}-${index}`}
                >
                  {block.value}
                </h2>
              )

            case 'h3':
              return (
                <h3
                  className={styles.streamfieldHeading}
                  key={`${block.type}-${index}`}
                >
                  {block.value}
                </h3>
              )

            case 'h4':
              return (
                <h4
                  className={styles.streamfieldHeading}
                  key={`${block.type}-${index}`}
                >
                  {block.value}
                </h4>
              )

            case 'h5':
              return (
                <h5
                  className={styles.streamfieldHeading}
                  key={`${block.type}-${index}`}
                >
                  {block.value}
                </h5>
              )

            case 'embed':
              return (
                <div
                  className={styles.streamfieldEmbed}
                  dangerouslySetInnerHTML={{ __html: block.value.html }}
                  key={`${block.type}-${index}`}
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
                  key={`${block.type}-${index}`}
                />
              )

            case 'paragraph':
              return (
                <div
                  className={styles.streamfieldParagraph}
                  key={`${block.type}-${index}`}
                >
                  <RichText value={block.value} />
                </div>
              )

            case 'raw_html':
              return (
                <div
                  className={styles.streamfieldRaw}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                  key={`${block.type}-${index}`}
                />
              )

            case 'markdown':
              return <div className={styles.streamfieldParagraph}>
                <Markdown source={block.value} />
              </div>

            default:
              // console.log('Unknown Streamfield Block: ', block.type)
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
