import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './case-studies-block.module.scss'

const CaseStudiesBlock = ({
  title,
  caseStudies,
  className,
  sectionTitle,
  listingUrl,
}) => (
  <div className={[styles.block, className].join(' ')}>
    {sectionTitle ? (
      <span className={styles.pageSectionTitle}>{sectionTitle}</span>
    ) : null}
    <div className={styles.blockList}>
      {caseStudies.map(caseStudy => (
        <Link className={styles.caseStudy}>
          <div className={styles.caseStudyMeta}>
            <div className={styles.caseStudyMetaContainer}>
              <h4 className={styles.caseStudyMetaClient}>{caseStudy.client}</h4>
              <h3 className={styles.caseStudyMetaTitle}>{caseStudy.title}</h3>
              <p className={styles.caseStudyMetaDesc}>
                {caseStudy.description}
              </p>
            </div>
            <img
              src={require('../../images/icons/cluster.png')}
              alt=""
              className={styles.caseStudyClusterIcon}
            />
          </div>

          <div className={styles.caseStudyImage}>
            <img src={caseStudy.image} />
          </div>
        </Link>
      ))}
    </div>
    {listingUrl ? (
      <div className={styles.seeMore}>
        <Link to={listingUrl}>See more case studies</Link>
      </div>
    ) : null}
  </div>
)

CaseStudiesBlock.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  className: PropTypes.string,
  listingUrl: PropTypes.string.isRequired,
}

CaseStudiesBlock.defaultProps = {
  className: '',
  caseStudies: [],
  sectionTitle: 'Work',
}

export default CaseStudiesBlock
