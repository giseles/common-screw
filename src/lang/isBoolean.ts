import isType from '../_utils/isType'

/**
 * @name 判断类型-布尔值
 * @example
 *  isBoolean(33)       ---- false
 *  isBoolean(true)    ---- true
 */
export const isBoolean = isType('Boolean')
