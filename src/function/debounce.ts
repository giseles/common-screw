/**
 * @name 防抖
 * @param {Function} fn 方法
 * @param {Number} ms 时间 = 500毫秒
 * @description
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @example
 * window触发resize
 * input搜索联想
 * window.addEventListener(
 *  'resize',
 *  debounce(() => {
 *    console.log(window.innerWidth);
 *   }, 500)
 * );
 */
export const debounce = (fn: any, ms: number = 500) => {
  let timeoutId: any
  return function (...args: any) {
    clearTimeout(timeoutId)
    // @ts-ignore
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
