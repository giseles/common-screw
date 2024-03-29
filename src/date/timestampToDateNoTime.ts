import addZero from "../_utils/addZero"

/**
 * @name 时间戳转日期 无时间
 * @param {Number} timestamp 时间戳 = 当前时间戳
 * @returns {Date} 日期
 * @example
 *  timestampToDateNoTime()                ---- 2021-06-03
 *  timestampToDateNoTime(1622711246300)   ---- 2021-06-03
 */
export const timestampToDateNoTime = (timestamp: number = +new Date()) => {
  const time = new Date(timestamp)
  const y = time.getFullYear()
  const M = time.getMonth() + 1
  const d = time.getDate()
  return y + "-" + addZero(M) + "-" + addZero(d)
}
