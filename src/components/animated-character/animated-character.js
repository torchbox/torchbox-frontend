// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import { ReactComponent as WomanChar } from '@images/help-character.svg'
import { ReactComponent as WagtailChar } from '@images/wagtail.svg'
import { ReactComponent as ManChar } from '@images/data-greeting.svg'
// Styles
import './animated-character.module.scss'
import styles from './animated-character.module.scss'

class AnimatedCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.containerRef = React.createRef()
  }

  animate = () => {
    if (this.containerRef.current) {
      setTimeout(() => {
        this.setState({ active: true })
      }, 500)
    }
  }

  componentDidMount() {
    if (this.containerRef.current && window) {
      this.animate()
    }
  }

  render() {
    const { containerClassName, character } = this.props
    return (
      <div
        ref={this.containerRef}
        className={[
          styles.container,
          containerClassName,
          character == 'wagtail' ? styles.alignRight : styles.alignLeft,
        ].join(' ')}
      >
        {this.renderCharacter()}
      </div>
    )
  }

  renderCharacter = () => {
    const { active } = this.state
    switch (this.props.character) {
      case 'woman-left':
        return (
          <WomanChar
            className={active ? styles.imageWomanActive : styles.imageWoman}
          />
        )

      case 'wagtail':
        return (
          <WagtailChar
            className={active ? styles.imageWagtailActive : styles.imageWagtail}
          />
        )

      case 'man-left':
        return (
          <ManChar
            className={active ? styles.imageManActive : styles.imageMan}
          />
        )

      default:
        return <div style={{ height: '20vh', width: 200, display: 'block' }} />
    }
  }
}

AnimatedCharacter.propTypes = {
  character: PropTypes.string,
  containerClassName: PropTypes.string,
}

AnimatedCharacter.defaultProps = {
  className: '',
  containerClassName: '',
}

export default AnimatedCharacter
