import * as React from 'react'
import Layout from '../components/Layout'
import ResponsiveWrapper from '../components/ResponsiveWrapper'

const NotFoundPage = () => (
  <Layout>
    <ResponsiveWrapper>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the
        sadness.
      </p>
    </ResponsiveWrapper>
  </Layout>
)

export default NotFoundPage
