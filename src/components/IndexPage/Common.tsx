import styled from 'styled-components'
import { media } from '../../variables'

export const Inner = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${media.sp} {
    max-width: 100%;
  }
`

export const Content = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 1;
  min-height: 500px;
  height: 100%;
`
