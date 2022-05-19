import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import Animation from './animation'

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="landing-page">
          <h1 className="hero__title">Saga dokumentasjon</h1>
          <p className="hero__subtitle">
            Vi senker terskelen for å komme i gang med dataanalyse på tvers av
            vegvesenets mange ulike datakilder.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/intro">
              Les dokumentasjonen
            </Link>
            <Animation />
          </div>
        </div>
      </div>
    </section>
  )
}
