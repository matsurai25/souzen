import * as React from 'react'
import Lottie from '../Lottie'
import animation from '../../animation/loading'
import { sleep } from '../../util'
import styled, { css } from 'styled-components'

interface Props {
  isLoading: boolean
}

interface State {
  isLoadingAnimationEnded: boolean
}

export default class extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingAnimationEnded: false
    }
  }

  async componentDidUpdate(prevProps: Props) {
    if (
      prevProps.isLoading === true &&
      this.props.isLoading === false
    ) {
      await sleep(300)
      this.setState({ isLoadingAnimationEnded: true })
    }
  }

  render() {
    const { isLoadingAnimationEnded } = this.state
    const { isLoading } = this.props
    return isLoadingAnimationEnded ? null : (
      <Wrapper isLoading={isLoading}>
        <Loading src={animation} autoplay />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.3s ease-in-out 0s;

  ${({ isLoading }) =>
    !isLoading &&
    css`
      opacity: 0;
    `}
`

const Loading = styled(Lottie)`
  width: 100px;
  height: 100px;
  margin-top: -150px;
`
