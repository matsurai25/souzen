import * as React from 'react'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import 'reset-css'
import styled, {
  createGlobalStyle
} from 'styled-components'
import { FontFamily } from '../variables'

interface Props {
  isHeaderHidden?: boolean
  children: React.ReactNode
}

const TemplateWrapper = ({
  isHeaderHidden,
  children
}: Props) => {
  const { title, description } = useSiteMetadata()
  return (
    <Body>
      <Helmet>
        <html lang='ja' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-16x16.png'
          sizes='16x16'
        />
        <meta name='theme-color' content='#0000FF' />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta name='twitter:site' content='@matsurai25' />
        <meta property='og:title' content={title} />
        <meta
          property='og:url'
          content='https://souzen.me'
        />
        <meta
          property='og:image'
          content='https://souzen.me/img/og-image.jpg'
        />
        <script src='/js/typekit.js' />
      </Helmet>
      <GlobalStyle />
      <Navbar isHeaderHidden={isHeaderHidden} />
      <div>{children}</div>
      <Footer />
    </Body>
  )
}

const Body = styled.div`
  font-family: ${FontFamily.SansSerif};
`

const GlobalStyle = createGlobalStyle`
  html {
    opacity: 0;
  }

  html.wf-active {
    transition: opacity 0.3s;
    opacity: 1;
  }
`

export default TemplateWrapper
