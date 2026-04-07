import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Manual (Getting Started)',
    description: (
      <>
        Start here if you are new to Wibeex. This section guides you through 
        creating an account, completing verification, and generating your API keys.
        <br /><br />
        You will also learn how authentication works, how to sign requests, and 
        how to safely use your API credentials.
        <br /><br />
        👉 Recommended first step before using any API.
      </>
    ),
  },
  {
    title: 'Public APIs (No Authentication)',
    description: (
      <>
        Access real-time market data without authentication. This includes 
        markets, tickers, and pricing information.
        <br /><br />
        These endpoints are useful for building dashboards, charts, or 
        tracking market activity.
        <br /><br />
        👉 No API key required.
      </>
    ),
  },
  {
    title: 'Authenticated APIs (Trading & Account)',
    description: (
      <>
        Perform actions on behalf of a user using API key authentication.
        <br /><br />
        This includes placing orders, cancelling orders, checking balances, 
        and retrieving user profile information.
        <br /><br />
        👉 Requires API key + signed requests.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* 👇 Top Intro (THIS is the missing piece) */}
        <div style={{ marginBottom: '85px', textAlign: 'left' }}>
         
        </div>

        {/* 👇 Feature sections */}
        <div className="row  ">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
 {/* 👇 Top Intro (THIS is the missing piece) */}
        <div style={{ marginBottom: '119px', textAlign: 'left' }}>
         
        </div>

      </div>
    </section>
  );
}