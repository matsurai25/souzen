import * as React from 'react'

import gradient from './../../img/about_gradient.svg'
import dots from './../../img/about_dots.svg'
import dots2 from './../../img/about_dots2.svg'
import side from './../../img/about_side.svg'
import zen from './../../img/about_zen.svg'
import aboutTitle from './../../img/about_about.svg'
import styled from 'styled-components'
import { Content, Inner } from './Common'
import { media } from '../../variables'
import { Link } from 'gatsby'

interface Props {
  isAppeared: boolean
}

const About: React.FunctionComponent<Props> = ({
  isAppeared
}) => (
  <AboutContent>
    <Zen src={zen} className='await' />
    <Dots2 src={dots2} className='await' />
    <Side src={side} className='await' />
    <Inner>
      <Wrapper>
        <AboutImage>
          <Dots src={dots} className='await' />
          <Title src={aboutTitle} className='await' />
          <Gradient className='await' src={gradient} />
        </AboutImage>
        <Text>
          matsurai(まつらい)はWebエンジニア/Webディレクター/映像制作者です。
          <br />
          2022年3月より、フリーランスになりました。
          <br />
          <br />
          誰かの課題を解決することが好きです。
          <br />
          ものを作る人とデザインと役に立つものを作ることとが好きです。
          <br />
          自分の生活圏の人間に影響を与えられるものを作ることが好きです。
          <br />
          <br />
          ご用命がございましたら、以下より遠慮なくご相談ください。
          <br />
          <Link to="/contact">お問い合わせ</Link>          
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

  ${media.sp} {
    display: block;
    padding-top: 200px;
  }
`

const Zen = styled.img`
  position: absolute;
  right: -50px;
  top: -50px;
  width: 300px;

  ${media.sp} {
    right: -60px;
    top: 0;
    width: 260px;
  }
`

const Title = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  height: 320px;
  transform: translateY(-40%);
  z-index: 1;

  ${media.sp} {
    position: relative;
    top: 0;
    right: 16px;
    transform: translateY(0%);
    height: 100px;
  }
`

const Gradient = styled.img`
  width: 800px;
  margin-top: -400px;
  margin-left: -400px;
  margin-bottom: -400px;
  z-index: 0;

  ${media.sp} {
    width: 400px;
    margin-top: -400px;
    transform: translateX(-180px);
    margin-bottom: 20px;
    margin-left: 0;
  }
`

const Dots = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  height: 20px;
  transform: translateY(-160px);
  z-index: 1;

  ${media.sp} {
    top: -20px;
    right: 192px;
    height: 10px;
    transform: translateY(0);
  }
`

const Dots2 = styled.img`
  position: absolute;
  right: 40px;
  top: 80%;
  width: 20px;

  ${media.sp} {
    right: 8px;
    top: 90%;
    width: 8px;
  }
`

const Side = styled.img`
  position: absolute;
  right: 40px;
  top: 300px;
  width: 20px;

  ${media.sp} {
    right: auto;
    left: 16px;
    width: 20px;
    top: 200px;
    transform: rotate(180deg);
    z-index: 2;
  }
`

const AboutImage = styled.div`
  position: relative;
  width: 50%;
  text-align: right;

  ${media.sp} {
    width: 100%;
  }
`

const Text = styled.div`
  width: 40%;
  padding-left: 10%;
  font-size: 12px;
  line-height: 30px;

  ${media.sp} {
    padding-left: 0%;
    width: calc(100% - 32px);
    margin: 0 auto;
    padding-bottom: 100px;
  }
`

const Hr = styled.hr`
  margin: 20px 0;
  border-color: #000;
  border-width: 0.5px;
`
