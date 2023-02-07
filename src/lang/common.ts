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

/**
 * @name 判断类型-对象
 * @param {Any} value 传入值
 * @example
 *  isObject({})     ---- true
 *  isObject(11)     ---- false
 */
export const isObject = (value: unknown) =>
  value !== null && typeof value === "object"

/**
 * @name 判断类型-函数
 * @param {Any} value 传入值
 * @example
 *  isFunction(()=>{})     ---- true
 *  isFunction(11)         ---- false
 */
export const isFunction = (value: unknown) => typeof value === "function"

/**
 * @name 判断类型-字符串
 * @param {Any} value 传入值
 * @example
 *  isString('11')       ---- true
 *  isString(11)         ---- false
 */
export const isString = (value: unknown) => typeof value === "string"

/**
 * @name 判断类型-数字
 * @param {Any} value 传入值
 * @example
 *  isNumber(11)         ---- true
 *  isNumber('11')       ---- false
 */
export const isNumber = (value: unknown) => typeof value === "number"

/**
 * @name 判断类型-undefined
 * @param {Any} value 传入值
 * @example
 *  isUndefined(undefined)    ---- true
 *  isUndefined('11')         ---- false
 */
export const isUndefined = (value: unknown) => typeof value === "undefined"
