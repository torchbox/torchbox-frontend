// Vendor Modules
import React from 'react'
// Components
import Layout from '@components/layout'
import Contact from '@components/contact-detailed'
// Styles
import styles from './404.module.scss'

const NotFoundPage = ({ contact, contactReasons }) => (
    <Layout theme='light--transparent' hideTeasers={true} seoTitle="Page not found">
        <div className={styles.pageHero}>
            <div className={styles.pageHeroContent}>
                <h1 className={styles.pageStrapline}>Err...</h1>
                <a className={styles.pageLink} href="/">Take me home</a>
            </div>
        </div>
        <Contact {...contact} {...contactReasons} />
    </Layout>
)

export default NotFoundPage
