import { getEscapeString } from "./getEscapeString"
import { getUnEscapeString } from "./getUnEscapeString"

export * from "./getEscapeString"
export * from "./getUnEscapeString"

/**
 * @name 字符串 类方法
 * @example
 * getEscapeString         // 字符串的转义
 * getUnEscapeString       // 字符串的反转义
 */
export const CSString = {
  getEscapeString,
  getUnEscapeString
}
