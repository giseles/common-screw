// @ts-nocheck
import addZero from "../_utils/addZero"
import { timestampToDate, timestampToDateNoTime } from "./index"

/**
 * @name 格式化时间
 * @returns {Date} 日期+时间
 * @example formatDate(1622711246300,'yyyy-MM-dd HH:mm:ss')  ---- 2021-06-03 17:06:29
 */
export const formatDate = (timestamp?: any, format?: string) => {
  if (!timestamp) {
    return "-"
  } else if (!format) {
    return timestampToDate(timestamp)
  } else if (format === "yyyy-MM-dd" || format === "yyyy-MM-DD") {
    return timestampToDateNoTime(timestamp)
  }

  let time = new Date(timestamp),
    Y = time.getFullYear(),
    M = time.getMonth() + 1,
    D = time.getDate(),
    h = time.getHours(),
    m = time.getMinutes(),
    s = time.getSeconds()

  return format
    .replace(/YYYY|yyyy/g, Y)
    .replace(/MM/g, addZero(M))
    .replace(/DD|dd/g, addZero(D))
    .replace(/HH|hh/g, addZero(h))
    .replace(/mm/g, addZero(m))
    .replace(/ss/g, addZero(s))
}
