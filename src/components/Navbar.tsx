import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

export default function({ isHeaderHidden }) {
  const [visible, setVisible] = React.useState(false)
  const visibleFunc = () => {
    if (window.scrollY > 500 && !visible) {
      setVisible(true)
    }
    if (window.scrollY <= 500 && visible) {
      setVisible(false)
    }
  }

  if (isHeaderHidden) {
    React.useEffect(() => {
      window.addEventListener('scroll', visibleFunc)
      return () =>
        window.removeEventListener('scroll', visibleFunc)
    }, [visible, setVisible])
  }

  return (
    <>
      <Header visible={isHeaderHidden ? visible : true}>
        <Logo>souzen</Logo>
        <Nav>
          <StyledLink to={''}>works</StyledLink>
          <StyledLink to={''}>blog</StyledLink>
          <StyledLink to={''}>contact</StyledLink>
        </Nav>
      </Header>
      {!isHeaderHidden && <Padding />}
    </>
  )
}

const Header = styled.header<{ visible: boolean }>`
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  background: rgba(255, 255, 255, 0.95);
  left: 0;
  top: 0;
  z-index: 100;
  height: 48px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

const Logo = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-flow: column; */
`

const StyledLink = styled(Link)`
  padding: 8px;
  font-size: 12px;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #fff;
    background: #000;
  }
`

const Padding = styled.div`
  height: 48px;
`
