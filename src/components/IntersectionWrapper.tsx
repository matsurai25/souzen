import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  height?: number
  /** このプロパティがオフになっている場合、イベントを発火させない */
  disabled?: boolean
  className?: string
  children(isAppeared: boolean): React.ReactNode
}

interface State {
  isAppeared: boolean
}

export default class extends React.Component<Props, State> {
  private observer: IntersectionObserver
  private wrapper = React.createRef<HTMLDivElement>()

  constructor(props) {
    super(props)
    this.state = {
      isAppeared: false
    }
  }

  async componentDidMount() {
    const height = this.props.height
      ? this.props.height
      : 300
    this.observer = new IntersectionObserver(
      changes => {
        changes.forEach(change => {
          if (change.intersectionRect.height > height) {
            if (!this.props.disabled) {
              this.setState({ isAppeared: true })
              this.observer.unobserve(change.target)
            }
          }
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.disabled === true &&
      this.props.disabled === false
    ) {
      this.observer.observe(this.wrapper.current)
    }
  }

  render() {
    const { className, children } = this.props
    const { isAppeared } = this.state
    return (
      <Wrapper
        ref={this.wrapper}
        className={className}
        isAppeared={isAppeared}
      >
        {children(isAppeared)}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<{ isAppeared: boolean }>`
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0s;

  ${({ isAppeared }) =>
    isAppeared &&
    css`
      opacity: 1;
    `}
`
