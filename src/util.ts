/**
 * .awaitがついた画像の読み込みが全て終わるのを待つ
 */
export function sleepUntilAllImageLoaded() {
  return new Promise(resolve => {
    const imgElements = document.querySelectorAll(
      'img.await'
    )
    const imgSrcs = Array.from(
      new Set(
        Array.from(imgElements).map(
          (e: HTMLImageElement) => e.src
        )
      )
    )
    const promises = imgSrcs.map(src => {
      return new Promise(res => {
        const img = new Image()
        img.onload = res
        img.src = src
      })
    })
    promises.length === 0
      ? resolve()
      : Promise.all(promises).then(resolve)
  })
}

/**
 * awaitするとsleepできる関数
 */
export function sleep(time: number) {
  return new Promise(r => setTimeout(r, time))
}
