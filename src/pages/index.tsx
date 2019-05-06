import * as React from 'react'
import { sleep, sleepUntilAllImageLoaded } from './../util'
import LoadingOverlay from './../components/IndexPage/LoadingOverlay'
import Layout from '../components/Layout'

import IntersectionWrapper from './../components/IntersectionWrapper'
import Mainvisual from './../components/IndexPage/Mainvisual'
import About from './../components/IndexPage/About'
import Works from './../components/IndexPage/Works'
import Contact from './../components/IndexPage/Contact'
import styled, { css } from 'styled-components'

interface Props {
  location: Location
}

interface State {
  isLoading: boolean
}

export default class extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    await sleepUntilAllImageLoaded()
    await sleep(800)
    this.setState({ isLoading: false })
  }

  render() {
    const isHeaderHidden =
      this.props.location.pathname === '/'
    const { isLoading } = this.state
    return (
      <Layout isHeaderHidden={isHeaderHidden}>
        <Wrapper isLoading={isLoading}>
          <LoadingOverlay isLoading={isLoading} />
          <MainvisualWrapper disabled={isLoading}>
            {isAppeared => (
              <>
                <Mainvisual isAppeared={isAppeared} />
                <MainvisualShadow />
              </>
            )}
          </MainvisualWrapper>
          <AboutWrapper height={450} disabled={isLoading}>
            {isAppeared => (
              <>
                <About isAppeared={isAppeared} />
                <AboutShadow />
              </>
            )}
          </AboutWrapper>
          <WorksWrapper height={450} disabled={isLoading}>
            {isAppeared => (
              <>
                <Works isAppeared={isAppeared} />
                <WorksShadow />
              </>
            )}
          </WorksWrapper>
          <ContactWrapper disabled={isLoading}>
            {isAppeared => (
              <>
                <Contact isAppeared={isAppeared} />
              </>
            )}
          </ContactWrapper>
        </Wrapper>
      </Layout>
    )
  }
}

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  width: 100%;
  height: 100%;
  z-index: -10;
`

const Wrapper = styled.div<{ isLoading: boolean }>`
  width: 100%;
  overflow: hidden;

  ${({ isLoading }) =>
    isLoading &&
    css`
      background: #fff;
      position: fixed;
      overflow: hidden;
      height: 100vh;
      z-index: 1;
    `}
`

const Item = styled(IntersectionWrapper)`
  img {
    vertical-align: bottom;
  }
`

const MainvisualWrapper = styled(Item)`
  height: 100vh;
  position: relative;
  max-height: 1000px;
  padding-bottom: 20px;
  z-index: 10;
  margin-bottom: -25%;
`

const MainvisualShadow = styled(Shadow)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);
`

const AboutWrapper = styled(Item)`
  position: relative;
  padding-bottom: 20px;
  z-index: 9;
  margin-bottom: -15%;
`

const AboutShadow = styled(Shadow)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
`

const WorksWrapper = styled(Item)`
  position: relative;
  padding-bottom: 20px;
  z-index: 8;
  margin-bottom: -10%;
`

const WorksShadow = styled(Shadow)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
`

const ContactWrapper = styled(Item)``
