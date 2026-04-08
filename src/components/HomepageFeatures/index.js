import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Manual',
   
    description: (
      <>
        Start here if you are new to Wibeex. Learn account setup,
        verification, and API key generation.

        <br /><br />
        Understand authentication, request signing, and how to safely
        use API credentials.

        <br /><br />
        <span className={styles.note}>👉 Recommended first step</span>
      </>
    ),
  },
  {
    title: 'Public APIs',
 
    description: (
      <>
        Access real-time market data including tickers, markets,
        and pricing without authentication.

        <br /><br />
        Perfect for dashboards, charts, and tracking market activity.

        <br /><br />
        <span className={styles.note}>👉 No API key required</span>
      </>
    ),
  },
  {
    title: 'Authenticated APIs',
   
    description: (
      <>
        Execute trades, manage balances, and access user data
        using API key authentication.

        <br /><br />
        Includes orders, cancellations, balances, and profiles.

        <br /><br />
        <span className={styles.note}>👉 Requires API key</span>
      </>
    ),
  },
];

function Feature({title, description, icon}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* Feature Cards */}
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      </div>
    </section>
  );
}