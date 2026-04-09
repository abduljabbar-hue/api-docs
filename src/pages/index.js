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

      
        <p className={styles.heroDescription}>
          The documentation is divided into three main sections below.
          If you're new, start with the User Manual to understand
          authentication and API key usage before moving to trading endpoints.
        </p>

      </div>
    </header>
  );
}



// function Footer() {
//   return (
//     <footer className={styles.footer}>
      
//       <p className={styles.copy}>
//         © {new Date().getFullYear()} Wibeex. All rights reserved.
//       </p>

//     </footer>
//   );
// }

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
   
    </Layout>
  );
}


