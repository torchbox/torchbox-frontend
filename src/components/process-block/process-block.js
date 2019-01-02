import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './process-block.module.scss'

const ProcessBlock = ({ processes, className }) => (
  <div className={[styles.processBlock, className].join(' ')}>
    <div className={styles.processContainer}>
      <h1 className={styles.processTitle}>Products in five simple steps…</h1>

      <ul className={styles.processList}>
        { processes.map(process => (
          <li className={styles.processBox}>
            <h3>{process.title}</h3>
            <p>{process.description}</p>
          </li>
        )) }
      </ul>

    </div>
  </div>
)

ProcessBlock.propTypes = {
  className: PropTypes.string,
}

ProcessBlock.defaultProps = {
  className: '',
}

export default ProcessBlock
