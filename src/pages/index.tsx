import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Dokumentasjon"
      description="">
        <HomepageFeatures />
    </Layout>
  )
}
