import * as React from 'react'

import barcode from './../../img/mainvisual_barcode.svg'
import circles from './../../animation/mainvisual_circles'
import dots from './../../img/mainvisual_dots.svg'
import dots2 from './../../img/mainvisual_dots2.svg'
import gradient from './../../animation/mainvisual_gradient'
import line from './../../animation/mainvisual_line'
import qr from './../../img/mainvisual_qr.svg'
import runa from './../../animation/mainvisual_runa'
import sou from './../../animation/mainvisual_sou'
import souzen_type from './../../img/mainvisual_souzen_type.svg'
import title from './../../animation/mainvisual_title'
import Lottie from './../Lottie'
import styled, { css } from 'styled-components'
import { Content } from './Common'
import { media } from '../../variables'

interface Props {
  isAppeared: boolean
}

const Mainvisual: React.FunctionComponent<Props> = ({
  isAppeared
}) => (
  <MainvisualContent>
    <Maintitle>
      <Barcode className='await' src={barcode} />
      <Dots className='await' src={dots} />
    </Maintitle>
    <MaintitleLottie
      src={title}
      when={isAppeared}
      delay={0}
    />
    <Gradient src={gradient} when={isAppeared} delay={1} />
    <Circles src={circles} when={isAppeared} delay={3} />
    <Dots2 className='await' src={dots2} />
    <Qrcode className='await' src={qr} />
    <Runa src={runa} when={isAppeared} delay={2.5} />
    <Sou src={sou} when={isAppeared} delay={2} />
    <Line src={line} when={isAppeared} delay={3} />
    <SouzenType className='await' src={souzen_type} />
  </MainvisualContent>
)

export { Mainvisual as default }

const MainvisualContent = styled(Content)`
  height: 100vh;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);

  ${media.sp} {
    height: 500px;
  }
`

const element = css`
  top: 40%;
  left: 50%;
  position: absolute;
`

const Maintitle = styled.div`
  ${element}
  z-index: 1;
  width: 480px;
  height: 480px;
  margin-left: -240px;
  margin-top: -240px;

  ${media.sp} {
    width: 300px;
    height: 300px;
    margin-left: -150px;
    margin-top: -150px;
  }
`

const MaintitleLottie = styled(Lottie)`
  ${element}
  z-index: 1;
  width: 480px;
  height: 480px;
  margin-left: -240px;
  margin-top: -240px;

  ${media.sp} {
    width: 300px;
    height: 300px;
    margin-left: -150px;
    margin-top: -150px;
  }
`

const Barcode = styled.img`
  position: absolute;
  right: -60px;
  bottom: -20px;
  width: 20px;

  ${media.sp} {
    right: 50px;
    bottom: -60px;
    width: 10px;
    transform: rotate(90deg);
  }
`

const Dots = styled.img`
  position: absolute;
  left: -80px;
  top: -20px;
  width: 20px;

  ${media.sp} {
    left: -24px;
    top: 0px;
    width: 10px;
  }
`

const Dots2 = styled.img`
  ${element}
  top: 100px;
  left: auto;
  right: 200px;
  width: 20px;

  ${media.sp} {
    transform: rotate(90deg);
    top: 0px;
    right: 100px;
    width: 10px;
  }
`

const Qrcode = styled.img`
  ${element}
  left: auto;
  right: 20px;
  top: 20px;
  width: 70px;

  ${media.sp} {
    right: 10px;
    top: 10px;
    width: 40px;
  }
`

const SouzenType = styled.img`
  ${element}
  left: auto;
  width: 100px;
  right: -20px;
  transform: translateY(-120px);

  ${media.sp} {
    width: 50px;
    right: -10px;
    transform: translateY(-60px);
  }
`

const Gradient = styled(Lottie)`
  ${element}
  margin: -144px -144px 0 0;
  width: 720px;

  ${media.sp} {
    margin: -92px 0 0 -40px;
    width: 360px;
  }
`

const Circles = styled(Lottie)`
  ${element}
  width: 700px;
  margin-top: -556px;
  margin-left: -556px;

  ${media.sp} {
    width: 350px;
    margin-top: -270px;
    margin-left: -270px;
  }
`

const Runa = styled(Lottie)`
  ${element}
  transform: translate(-640px, 50px);
  width: 120px;

  ${media.sp} {
    width: 60px;
  }
`

const Sou = styled(Lottie)`
  ${element}
  margin-left: -500px;
  margin-top: -25px;
  width: 500px;

  ${media.sp} {
    margin-left: -300px;
    margin-top: 30px;
    width: 300px;
  }
`

const Line = styled(Lottie)`
  ${element}
  left: auto;
  top: 0;
  right: 120px;
  width: 2px;
  z-index: 1;

  ${media.sp} {
    right: 60px;
    width: 1px;
    z-index: 0;
  }
`
