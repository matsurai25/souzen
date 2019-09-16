import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import ResponsiveWrapper from '../../components/ResponsiveWrapper'
import styled from 'styled-components'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <ResponsiveWrapper full>
          <BlogRoll />
        </ResponsiveWrapper>
      </Layout>
    )
  }
}
