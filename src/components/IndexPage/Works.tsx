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
      <Lists>
        <section>
          <Year>2022</Year>
          <ul>
            <li>
              <a
                href='https://dotmp.jp/work/419'
                target='_blank'
                rel='noopener noreferrer'
              >
                【歌ってみた】回る空うさぎ - Orangestar
                covered by 存流 MV
              </a>
              <small>映像制作</small>
            </li>
          </ul>
        </section>
        <section>
          <Year>2021</Year>
          <ul>
            <li>
              <a
                href='https://dotmp.jp/work/419'
                target='_blank'
                rel='noopener noreferrer'
              >
                DIVE TO ZONeプロジェクト WEBサイト
              </a>
              <small>WEBエンジニア</small>
            </li>
            <li>
              <a
                href='https://dotmp.jp/work/378'
                target='_blank'
                rel='noopener noreferrer'
              >
                アニメ「オッドタクシー」WEBサイト
              </a>
              <small>WEBエンジニア</small>
            </li>
          </ul>
        </section>
      </Lists>
      <ItemsWrapper>
        <Items>
          <Work
            to={
              'https://twitter.com/matsurai25/status/1081972577965240320'
            }
            src={'/img/work_0.jpg'}
            title={'SOUZEN'}
            category={'web/design/motion'}
          />
          <Work
            to={
              'https://twitter.com/matsurai25/status/1069277566018568193'
            }
            src={'/img/work_2.jpg'}
            title={'FLUID'}
            category={'design/motion'}
          />
        </Items>
      </ItemsWrapper>
    </Inner>
  </WorksContent>
)

const Work: React.FunctionComponent<{
  to: string
  src: string
  title: string
  category: string
}> = ({ to, src, title, category }) => (
  <Item href={to} target={'_blank'}>
    <ItemContent src={src} />
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
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 40px auto 80px;

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
  overflow: auto;
  width: 720px;
  margin: 0 auto 70px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.sp} {
    width: auto;
    margin: 0 40px 70px;
    -webkit-overflow-scrolling: touch;
  }
`

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;

  ${media.sp} {
    grid-template-columns: 1fr;
  }
`

const Item = styled.a`
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
  color: #000;
`

const ItemTitle = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
`

const ItemContent = styled.img`
  display: block;
  width: 100%;
  border: 1px solid #000;

  ${media.sp} {
    box-sizing: border-box;
  }
`

const ItemCategory = styled.div`
  text-align: right;
  font-size: 10px;
  margin-top: -15px;
  font-weight: bold;
`

const Lists = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  margin-bottom: 60px;
  box-sizing: border-box;

  section {
    margin-bottom: 40px;
  }

  ul {
    margin-left: 100px;
    padding-left: 40px;
    border-left: 1px solid #000;
  }

  li {
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 12px;
  }

  small {
    display: block;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  ${media.sp} {
    max-width: calc(100% - 24px);
    padding: 24px;
    margin-bottom: 40px;

    section {
      margin-bottom: 40px;
    }

    ul {
      margin-left: 50px;
      padding-left: 20px;
    }

    li {
      list-style: none;
      font-size: 12px;
    }
  }
`

const Year = styled.h6`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  height: 0;

  ${media.sp} {
    font-size: 16px;
  }
`
