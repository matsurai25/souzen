import * as React from 'react'

import gradient from './../../img/about_gradient.svg'
import dots from './../../img/about_dots.svg'
import dots2 from './../../img/about_dots2.svg'
import side from './../../img/about_side.svg'
import zen from './../../img/about_zen.svg'
import aboutTitle from './../../img/about_about.svg'
import styled from 'styled-components'
import { Content, Inner } from './Common'

interface Props {
  isAppeared: boolean
}

const About: React.FunctionComponent<Props> = ({
  isAppeared
}) => (
  <AboutContent>
    <Zen
      src={zen}
      className='await'
    />
    <Dots2 src={dots2} className='await' />
    <Side src={side} className='await' />
    <Inner>
      <Wrapper>
        <AboutImage>
          <Dots src={dots} className='await' />
          <Title src={aboutTitle} className='await' />
          <Gradient
            className='await'
            src={gradient}
          />
        </AboutImage>
        <Text>
          matsuraiが主催する個人サークル。matsuraiが主催する個人サークル。
          matsuraiが主催する個人サークル。matsuraiが主催する個人サークル。
          matsuraiが主催する個人サークル。matsuraiが主催する個人サークル。
          matsuraiが主催する個人サークル。matsuraiが主催する個人サークル。
          <Line />
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen
          book.
        </Text>
      </Wrapper>
    </Inner>
  </AboutContent>
)

export { About as default }

const AboutContent = styled(Content)`
  padding: 20% 0 15%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 85%);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

const Zen = styled.img`
  position: absolute;
  right: -50px;
  top: -50px;
  width: 300px;
`

const Title = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  height: 320px;
  transform: translateY(-40%);
  z-index: 1;
`

const Gradient = styled.img`
  width: 800px;
  margin-top: -400px;
  margin-left: -400px;
  margin-bottom: -400px;
  z-index: 0;
`

const Dots = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  height: 20px;
  transform: translateY(-160px);
  z-index: 1;
`

const Dots2 = styled.img`
  position: absolute;
  right: 40px;
  top: 80%;
  width: 20px;
`

const Side = styled.img`
  position: absolute;
  right: 40px;
  top: 300px;
  width: 20px;
`

const AboutImage = styled.div`
  position: relative;
  width: 50%;
  text-align: right;
`

const Text = styled.div`
  width: 40%;
  padding-left: 10%;
  font-size: 12px;
  line-height: 30px;
`

const Line = styled.div`
  margin: 40px 0;
  border-bottom: 2px solid #000;
`
