import * as React from 'react'
import styled from 'styled-components'

export default function({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
`
