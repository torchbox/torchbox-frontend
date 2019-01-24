import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './case-studies-block.module.scss'

const CaseStudiesBlock = ({ title, caseStudies, className, sectionTitle, listingUrl }) => (
  <div className={[styles.block, className].join(' ')}>
    <span className={styles.pageSectionTitle}>{sectionTitle}</span>
    <div className={styles.blockList}>
      {caseStudies.map(caseStudy => (
        <Link className={styles.caseStudy}>
          <div className={styles.caseStudyMeta}>
            <h4 className={styles.caseStudyMetaClient}>{caseStudy.client}</h4>
            <h3 className={styles.caseStudyMetaTitle}>{caseStudy.title}</h3>
            <p className={styles.caseStudyMetaDesc}>
              {caseStudy.description}
            </p>
            <img src={require('../../images/icons/cluster.png')} alt="" className={styles.caseStudyClusterIcon}/>
          </div>

          <div className={styles.caseStudyImage}>
            <img src={caseStudy.image}/>
          </div>
        </Link>
      ))}
    </div>
    <div className={styles.seeMore}>
      <Link to={listingUrl}>See more case studies</Link>
    </div>
  </div>
)

CaseStudiesBlock.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired
}

CaseStudiesBlock.defaultProps = {
  className: '',
  caseStudies: [],
  sectionTitle: 'Work'
}

export default CaseStudiesBlock
