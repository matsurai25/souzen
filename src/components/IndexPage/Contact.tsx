import * as React from 'react'
import Lottie from '../Lottie'
import contact_gradient from '../../animation/contact_gradient'

import name from './../../img/contact_name.svg'
import title from './../../img/contact_title.svg'
import icon from './../../img/contact_icon.svg'
import styled from 'styled-components'
import { Content, Inner } from './Common'
import { media } from '../../variables'

interface Props {
  isAppeared: boolean
}

const Contact: React.FunctionComponent<Props> = ({
  isAppeared
}) => (
  <ContactContent id='contact'>
    <FlexInner>
      <div>
        <Gradient
          src={contact_gradient}
          when={isAppeared}
        />
      </div>
      <Info>
        <Title src={title} className='await' />
        <Text>
          <Icon className='await' src={icon} />
          <div>
            <Name>
              <img className='await' src={name} />
            </Name>
            <Address>
              mail: m.matsurai25@gmail.com
              <br />
              twitter: @matsurai25
              <br />
              ご依頼について
            </Address>
          </div>
        </Text>
      </Info>
    </FlexInner>
  </ContactContent>
)

export { Contact as default }

const ContactContent = styled(Content)`
  padding-top: 15%;
`

const FlexInner = styled(Inner)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.sp} {
    flex-flow: column;
  }
`

const Info = styled.div`
  flex: 1;
  padding-left: 80px;

  ${media.sp} {
    padding-left: 0;
  }
`

const Text = styled.div`
  display: flex;

  ${media.sp} {
    flex-flow: column;
    align-items: center;
  }
`

const Name = styled.div`
  display: block;
  background-color: #000;
  padding: 8px 16px;
  margin-bottom: 20px;
`

const Address = styled.div`
  font-size: 12px;
  line-height: 30px;

  ${media.sp} {
    text-align: center;
    padding-bottom: 80px;
  }
`

const Icon = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 40px;
  border-radius: 50%;

  ${media.sp} {
    margin-right: 0;
    margin-bottom: 24px;
    width: 80px;
    height: 80px;
  }
`

const Title = styled.img`
  height: 60px;
  margin-bottom: 40px;

  ${media.sp} {
    margin-top: 80px;
    height: 30px;
    text-align: center;
  }
`

const Gradient = styled(Lottie)`
  width: 400px;

  ${media.sp} {
    width: 100px;
  }
`
