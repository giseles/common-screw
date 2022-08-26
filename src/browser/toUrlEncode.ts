import { LooseObject } from "../_interface"

/**
 * @name 对象转url参数
 * @param {Object} data 数据
 * @example
 *  toUrlEncode({ a: 1, b: 3 })   ---- 'a=1&b=3'
 *  toUrlEncode({})               ---- ''
 */
export const toUrlEncode = (data: LooseObject = {}) => {
  if (typeof data !== "object") return ""
  const result = Object.keys(data).map((key) => {
    if (typeof data[key] === "object") {
      return `${key}=${JSON.stringify(data[key])}`
    } else {
      return `${key}=${data[key]}`
    }
  })
  return result.join("&")
}
