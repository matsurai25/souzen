import * as React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import barcode from './../img/barcode.svg'

export default function() {
  return (
    <Wrapper>
      <div>
        <Barcode src={barcode} />
      </div>
      <div>
        Copyright &copy;&nbsp;2019-&nbsp;
        <Anchor
          href='https://twitter.com/matsurai25'
          target='_blank'
          rel='noopenner noreferer'
        >
          souzen / matsurai
        </Anchor>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 10px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e8e8e8;
  background: -webkit-linear-gradient(
    left,
    #ecf0ff 0%,
    #ffeaff 100%
  );
`

const Barcode = styled.img`
  width: 120px;
  display: block;
`

const Anchor = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
