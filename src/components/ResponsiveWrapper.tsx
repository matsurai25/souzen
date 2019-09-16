import * as React from 'react'
import styled, {
  createGlobalStyle
} from 'styled-components'
import { media } from '../variables'

export default function({
  children,
  full
}: {
  children: React.ReactNode
  full?: boolean
}) {
  return <Wrapper full={full}>{children}</Wrapper>
}

const Wrapper = styled.div<{ full?: boolean }>`
  line-height: 1.8;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
  min-height: calc(100vh - 95px);

  max-width: ${({ full }) =>
    full ? `100%` : `calc(720px - 32px)`};

  & *::selection {
    background: #7fffdd;
  }

  ${media.sp} {
    padding: 24px 16px;
  }
`
