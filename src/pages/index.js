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
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--center">
          {siteConfig.title}
        </Heading>
        
        <div className={styles.buttons}>
             <p>
            This documentation helps you integrate with the Wibeex exchange using REST APIs.
            You can retrieve market data, manage accounts, and execute trades programmatically.
         
            The documentation is divided into three main sections below. 
            If you are new, start with the <strong>User Manual</strong> to understand authentication 
            and API key usage before moving to trading endpoints.
          </p>
        </div>
      </div>
    </header>
  );
}



 function Footer() {
  return (
    <footer style={{
      background: '#1f2937',
      padding: '23px 0',
      textAlign: 'center',
      color: '#ccc'
    }}>
      
      {/* Title */}
      <p style={{ fontWeight: 600, marginBottom: '10px', color: '#fff' }}>
        Keep in Contact!
      </p>

      {/* Social Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '20px' }}>
        
        <a href="https://www.instagram.com/wibe_ex/" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/insta.svg" width="26" />
        </a>

        <a href="https://t.me/wibeexenglish" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/telegram.svg" width="26" />
        </a>

        <a href="https://x.com/wibe_ex" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/x.svg" width="26" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61578853760526" target="_blank">
          <img src="https://stage-wibeex.s3.ap-southeast-1.amazonaws.com/facebook.svg" width="26" />
        </a>

      </div>

      {/* Divider */}
      <div style={{
        width: '60%',
        margin: '0 auto 15px',
        borderTop: '1px solid #374151'
      }} />

      {/* Copyright */}
      <p style={{ fontSize: '14px', color: '#9ca3af' }}>
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


