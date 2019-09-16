import * as React from 'react'
import Lottie from '../Lottie'
import contact_gradient from '../../animation/contact_gradient'

import name from './../../img/contact_name.svg'
import title from './../../img/contact_title.svg'
import icon from './../../img/contact_icon.svg'
import styled from 'styled-components'
import { Content, Inner } from './Common'

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
`

const Info = styled.div`
  flex: 1;
  padding-left: 80px;
`

const Text = styled.div`
  display: flex;
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
`

const Icon = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 40px;
  border-radius: 50%;
`

const Title = styled.img`
  height: 60px;
  margin-bottom: 40px;
`

const Gradient = styled(Lottie)`
  width: 400px;
`
