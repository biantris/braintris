import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

import styles from '../css/index.module.css';

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description='A state management library for React.'>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>
            <div>🧠</div>
            <div className={styles.hiddenText} aria-hidden='true'>
              braintris
            </div>
          </h1>
          <p className='hero__subtitle'>
            <Translate id='homePage.head.tagline'>
              {siteConfig.tagline}
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'hero__button button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}
            >
              <Translate id='homePage.head.start'>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
