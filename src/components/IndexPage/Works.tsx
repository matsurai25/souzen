import * as React from 'react'

import circles from './../../img/works_circles.svg'
import gradient from './../../img/works_gradient.svg'
import dots from './../../img/works_dots.svg'
import side from './../../img/works_side.svg'
import worksTitle from './../../img/works_title.svg'
import styled from 'styled-components'
import { Inner, Content } from './Common'

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
      <Items>
        <Work title={'SAMPLE'} category={'web / design'} />
        <Work title={'SAMPLE'} category={'web / design'} />
        <Work title={'SAMPLE'} category={'web / design'} />
      </Items>
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
`

const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(0, -50%);
  width: 900px;
`

const Circles = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-60%, -55%);
  width: 1400px;
`

const Title = styled.img`
  width: 900px;
  display: block;
  margin: 0 auto 40px;
`

const Dots = styled.img`
  position: absolute;
  bottom: -20px;
  right: 40px;
  width: 20px;
  transform: translateY(-160px);
`

const Side = styled.img`
  position: absolute;
  right: 40px;
  top: 300px;
  width: 20px;
  z-index: 1;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Item = styled.div`
  width: 300px;
  margin-bottom: 20px;
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
`

const ItemCategory = styled.div`
  text-align: right;
  font-size: 10px;
  margin-top: -15px;
  font-weight: bold;
`
