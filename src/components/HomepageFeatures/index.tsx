import React from 'react'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import Animation from './animation'

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="landing-page">
          <div className="information"> 
            <h1 className="hero__title">Saga</h1>
            <h1 className="hero__title">dokumentasjon</h1>
            <p className="hero__subtitle margin-bottom--lg">
              Vi senker terskelen for å komme i gang med dataanalyse på tvers av
              Vegvesenet.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/intro">
                Les dokumentasjonen
              </Link>
            </div>
          </div>
          <Animation className="animation"/>
        </div>
      </div>
    </section>
  )
}
