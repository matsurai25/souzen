import * as React from 'react'

import circles from './../../img/works_circles.svg'
import gradient from './../../img/works_gradient.svg'
import dots from './../../img/works_dots.svg'
import side from './../../img/works_side.svg'
import worksTitle from './../../img/works_title.svg'
import styled from 'styled-components'
import { Inner, Content } from './Common'
import { media } from '../../variables'

interface Props {
  isAppeared: boolean
}

const Works: React.FunctionComponent<Props> = ({
  isAppeared
}) => (
  <WorksContent>
    <Dots src={dots} className='await' />
    <Side src={side} className='await' />
    <Gradient className='await' src={gradient} />
    <Circles className='await' src={circles} />
    <Inner>
      <Title src={worksTitle} className='await' />
      <ItemsWrapper>
        <Items>
          <Work
            title={'SAMPLE'}
            category={'web / design'}
          />
          <Work
            title={'SAMPLE'}
            category={'web / design'}
          />
          <Work
            title={'SAMPLE'}
            category={'web / design'}
          />
        </Items>
      </ItemsWrapper>
    </Inner>
  </WorksContent>
)

const Work: React.FunctionComponent<{
  title: string
  category: string
}> = ({ title, category }) => (
  <Item>
    <ItemContent />
    <ItemTitle>{title}</ItemTitle>
    <ItemCategory>{category}</ItemCategory>
  </Item>
)

export { Works as default }

const WorksContent = styled(Content)`
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
  padding-bottom: 10%;
  padding-top: 15%;

  ${media.sp} {
    padding-top: 30%;
  }
`

const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(0, -50%);
  width: 900px;

  ${media.sp} {
    width: 500px;
  }
`

const Circles = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-60%, -55%);
  width: 1400px;

  ${media.sp} {
    width: 700px;
  }
`

const Title = styled.img`
  max-width: 900px;
  width: 100%;
  display: block;
  margin: 0 auto 40px;

  ${media.sp} {
    max-width: 300px;
  }
`

const Dots = styled.img`
  position: absolute;
  bottom: -20px;
  right: 40px;
  width: 20px;
  transform: translateY(-160px);

  ${media.sp} {
    right: 12px;
  }
`

const Side = styled.img`
  position: absolute;
  right: 40px;
  top: 300px;
  width: 20px;
  z-index: 1;

  ${media.sp} {
    right: 12px;
  }
`

const ItemsWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  width: 760px;
`

const Item = styled.div`
  width: 300px;
  margin-bottom: 20px;

  ${media.sp} {
    width: 240px;
  }
`

const ItemTitle = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
`

const ItemContent = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #000;
  background-color: #fff;

  ${media.sp} {
    width: 240px;
    height: 240px;
  }
`

const ItemCategory = styled.div`
  text-align: right;
  font-size: 10px;
  margin-top: -15px;
  font-weight: bold;
`
