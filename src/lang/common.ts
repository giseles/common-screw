import isType from "../_utils/isType"

/**
 * @name 判断类型-数组
 * @param {Any} value 传入值
 * @example
 *  isArray([])       ---- true
 *  isArray([3,2])    ---- true
 *  isArray(33)       ---- false
 *
 */
export const isArray = isType("Array")

/**
 * @name 判断类型-布尔值
 * @param {Any} value 传入值
 * @example
 *  isBoolean(true)     ---- true
 *  isBoolean(false)    ---- true
 *  isBoolean(33)       ---- false
 */
export const isBoolean = isType("Boolean")

export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === "object"
export const isFunction = (value: unknown): value is Function =>
  typeof value === "function"
export const isString = (value: unknown): value is string =>
  typeof value === "string"
export const isNumber = (value: unknown): value is number =>
  typeof value === "number"
export const isUndefined = (value: unknown): value is undefined =>
  typeof value === "undefined"
