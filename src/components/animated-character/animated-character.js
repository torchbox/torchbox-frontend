import React from 'react'
import PropTypes from 'prop-types'

import styles from './animated-character.module.scss'
import './animated-character.module.scss'

import { ReactComponent as WomanChar } from '../../images/help-character.svg'
import { ReactComponent as WagtailChar } from '../../images/wagtail.svg'
import { ReactComponent as ManChar } from '../../images/data-greeting.svg'

class AnimatedCharacter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.containerRef = React.createRef()
  }

  animate = () => {
    if (this.containerRef.current) {
      const imagePosition = this.containerRef.current.offsetTop
      const screenPosition = window.pageYOffset
      if (screenPosition > imagePosition - window.innerHeight * 0.6) {
        setTimeout(() => {
          this.setState({ active: true })
        }, 500)
      }
    } else {
      window.removeEventListener('scroll', this.animate)
    }
  }

  componentDidMount() {
    if (this.containerRef.current && window) {
      this.animate()
      window.addEventListener('scroll', this.animate)
    }
  }

  componentWillMount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('scroll', this.animate)
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
          character == 'wagtail' ? styles.alignRight : null,
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
            className={active ? styles.imageWomanActive : styles.imageWoman}
          />
        )

      default:
        return <div style={{ height: '20vh', width: 200, display: 'block' }} />
    }
  }
}

AnimatedCharacter.propTypes = {
  character: PropTypes.string,
  className: PropTypes.string,
}

AnimatedCharacter.defaultProps = {
  className: '',
}

export default AnimatedCharacter
