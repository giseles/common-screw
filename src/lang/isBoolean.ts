import isType from '../_utils/isType'

/**
 * @name 判断类型-布尔值
 * @example
 *  isBoolean(true)     ---- true
 *  isBoolean(false)    ---- true
 *  isBoolean(33)       ---- false
 */
export const isBoolean = isType('Boolean')
