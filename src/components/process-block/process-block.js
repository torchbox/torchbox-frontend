// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Utilities
import { ReactComponent as ToolkitImage } from '@images/toolkit.svg'
import { renderTorchUp } from '@utils/torchup'
import { pageUrl } from '@utils/urls'
// Styles
import styles from './process-block.module.scss'

class ProcessBlock extends React.Component {
  render() {
    const { title = '', className, sectionTitle, processes } = this.props
    return (
      <div className={[styles.processBlock, className].join(' ')}>
        <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        <div className={styles.processContainer}>
          {title && <h1 className={styles.processTitle} {...renderTorchUp(title)} />}
          <ToolkitImage className={styles.processImage} />
          <ul className={styles.processList}>
            {processes.map((process, index) => (
              <li key={`process-${index}`} className={styles.processItem}>
                <h2 className={styles.processItemTitle}>{process.title}</h2>
                <p className={styles.processItemDesc}>{process.description}</p>
                {process.pageLinkLabel && process.pageLink && 
                  <Link
                    to={pageUrl(process.pageLink)}
                    className={styles.processItemLink}
                  >
                    <span>{process.pageLinkLabel}</span>
                  </Link>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

ProcessBlock.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  sectionTitle: PropTypes.string,
  processes: PropTypes.array,
}

ProcessBlock.defaultProps = {
  className: '',
  sectionTitle: 'Process',
  processes: [],
}

export default ProcessBlock
