import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FontFamily, gradient } from '../variables'

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
        <Logo>
          蒼然<span> / souzen</span>
        </Logo>
        <Nav>
          <StyledLink to={'/'}>About</StyledLink>
          <StyledLink to={'/blog'}>Blog</StyledLink>
          <StyledLink to={'/contact'}>ご依頼について</StyledLink>
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
  font-size: 16px;
  font-family: ${FontFamily.Serif};

  span {
    font-size: 12px;
    font-family: ${FontFamily.SansSerif};
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  padding: 4px;
  margin-left: 4px;
  font-size: 12px;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #fff;
  }

  &:nth-child(1) {
    &:hover {
      background: ${gradient.blue};
    }
  }

  &:nth-child(2) {
    &:hover {
      background: ${gradient.yellow};
    }
  }

  &:nth-child(3) {
    &:hover {
      background: ${gradient.green};
    }
  }
`

const Padding = styled.div`
  height: 48px;
`
