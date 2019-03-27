// Vendor Modules
import React from 'react'
// Components
import Layout from '@components/layout'
import Contact from '@components/contact-detailed'
// Styles
import styles from './404.module.scss'

const NotFoundPage = ({ contact, contactReasons }) => (
    <Layout theme='light--transparent' hideTeasers={true}>
        <div className={styles.pageHero}>
            <h1 className={styles.pageStrapline}>Err...</h1>
        </div>
        <Contact {...contact} {...contactReasons} />
    </Layout>
)

export default NotFoundPage
