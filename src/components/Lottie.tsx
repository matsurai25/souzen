import lottie, { LottieAnimationItem } from 'lottie-web'
import * as React from 'react'
import { sleep } from '../util'

interface Props {
  src: any
  /** 切り替わったタイミングでアニメーションが行われる */
  when?: boolean
  /** 自動再生するかどうか。自動再生する場合はループする */
  autoplay?: boolean
  className?: string
  delay?: number
  /** ループ開始フレーム */
  loopStartFrame?: number
}

export default class Lottie extends React.Component<Props> {
  private wrapper = React.createRef<HTMLDivElement>()
  private animation: LottieAnimationItem | null = null

  componentDidMount() {
    const {
      src,
      when,
      autoplay,
      loopStartFrame
    } = this.props
    this.animation = lottie.loadAnimation({
      container: this.wrapper.current,
      renderer: 'svg',
      loop: autoplay,
      autoplay,
      animationData: src
    })

    // マウント時にwhenがtrueの場合、既に終わっているものとして最後のフレームに移動する
    if (when) {
      this.animation.goToAndStop(
        this.animation.getDuration(true),
        true
      )
    }

    // loopStartFrameがある場合、complete時に指定のフレームから再生する
    if (loopStartFrame) {
      this.animation.addEventListener('complete', () => {
        this.animation.goToAndPlay(loopStartFrame, true)
      })
    }
  }

  async componentDidUpdate(prevProps: Props) {
    const { when, delay } = this.props
    if (this.animation === null) {
      return
    }

    // 状態が変わった時だけアニメーション
    if (prevProps.when !== when) {
      if (when) {
        await sleep(1000 * delay)
        this.play()
      } else {
        this.refresh()
      }
    }
  }

  componentWillUnmount() {
    if (this.animation === null) {
      return
    }

    this.animation.destroy()
  }

  render() {
    const {
      when,
      src,
      autoplay,
      children,
      delay,
      loopStartFrame,
      ...props
    } = this.props
    return <div ref={this.wrapper} {...props} />
  }

  /** 最初から再生 */
  private play = () => {
    if (this.animation === null) {
      return
    }
    this.animation.goToAndPlay(0, true)
  }

  /** 最初に戻して止める */
  private refresh = () => {
    if (this.animation === null) {
      return
    }
    this.animation.goToAndStop(0, true)
  }
}
