/**
 * @name 延迟
 * @param {Number} time 时间 = 500毫秒
 * @description
 * 延迟n毫秒
 * @example
 * dva中延迟
 * yield call(delay, 500)
 */

export const delay = (time: number = 500) =>
  new Promise((resolve) => {
    setInterval(resolve, time)
  })
