import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './case-studies-block.module.scss'

const CaseStudiesBlock = ({ title, caseStudies, className }) => (
  <div className={[styles.block, className].join(' ')}>

    <h1 className={styles.blockTitle}>The proof is in the pudding</h1>

    <div className={styles.blockList}>


      {caseStudies.map(caseStudy => (
        <div
          className={styles.caseStudy}
          style={{
            backgroundImage: 'url(' + caseStudy.image + ')',
          }}
        >
          <div className={styles.caseStudyMeta}>
            <span className={styles.caseStudyMetaClient}>{caseStudy.client}</span>
            <h3 className={styles.caseStudyMetaTitle}>{caseStudy.title}</h3>
            <p className={styles.caseStudyMetaDesc}>
              {caseStudy.description}
            </p>
            <img src={require('../../images/icons/cluster.png')} alt="" className={styles.caseStudyClusterIcon}/>
          </div>

          <div className={styles.caseStudyImage}>
            <img src={caseStudy.image}/>
          </div>
        </div>
      ))}

    </div>

  </div>
)

CaseStudiesBlock.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  className: PropTypes.string,
}

CaseStudiesBlock.defaultProps = {
  className: '',
  caseStudies: [],
}

export default CaseStudiesBlock
