// Vendor Modules
import React from 'react'
// Components
import Layout from '@components/layout'
import Contact from '@components/contact-detailed'
// Styles
import styles from './404.module.scss'

const NotFoundPage = ({ strapline, background, contact, contactReasons }) => (
    <Layout theme='light--transparent' hideTeasers={true}>
        <div className={styles.pageHero} style={{ backgroundImage: `url(${background})` }} >
            <h1 className={styles.pageStrapline}>{strapline}</h1>
        </div>
        <Contact {...contact} {...contactReasons} />
    </Layout>
)

export default NotFoundPage
