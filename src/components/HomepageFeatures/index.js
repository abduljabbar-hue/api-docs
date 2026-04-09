import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: 'User Manual',
    link: '/docs/intro',
    description: (
      <>
        Start here if you are new to Wibeex. Learn account setup,
        verification, and API key generation.

       

        <br /><br />
        <span className={styles.note}>Recommended first step</span>
      </>
    ),
  },
  {
    title: 'Public APIs',
   link: '/docs/spot/rest/ticker',
    description: (
      <>
        Access real-time market data including tickers, markets,
        and pricing without authentication.

      

        <br /><br />
        <span className={styles.note}>No API key required</span>
      </>
    ),
  },
  {
    title: 'Authenticated APIs',
   link:'/docs/authenticated/rest/place-order',
    description: (
      <>
        Execute trades, manage balances, and access user data
        using API key authentication.
        <br /><br />
        <span className={styles.note}>Requires API key</span>
      </>
    ),
  },
];

function Feature({title, description, icon, link}) {
  return (
     <Link  to={link} className={clsx(styles.cardLink)}>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>

        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
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