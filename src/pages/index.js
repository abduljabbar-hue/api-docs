import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className="container">

        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>

        <p className={styles.heroSubtitle}>
          Integrate with the Wibeex exchange using REST APIs to retrieve market data,
          manage accounts, and execute trades programmatically.
        </p>

        <p className={styles.heroDescription}>
          The documentation is divided into three main sections below.
          If you're new, start with the <strong>User Manual</strong> to understand
          authentication and API key usage before moving to trading endpoints.
        </p>

      </div>
    </header>
  );
}



function Footer() {
  return (
    <footer className={styles.footer}>
      
      <p className={styles.footerTitle}>Keep in Contact</p>

      <div className={styles.socials}>
        <a href="https://www.instagram.com/wibe_ex/" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/insta.svg" />
        </a>

        <a href="https://t.me/wibeexenglish" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/telegram.svg" />
        </a>

        <a href="https://x.com/wibe_ex" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/x.svg" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61578853760526" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/facebook.svg" />
        </a>
      </div>

      <div className={styles.divider} />

      <p className={styles.copy}>
        © {new Date().getFullYear()} Wibeex. All rights reserved.
      </p>

    </footer>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout className={styles.layout}
      title={`Wibeex API Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <Footer />  
    </Layout>
  );
}


