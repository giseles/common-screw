import isType from '../_utils/isType'

/** 判断类型-数组 */

/**
 * @name 判断类型-数组
 * @example
 *  isArray(33)       ---- false
 *  isArray([3,2])    ---- true
 */
export const isArray = isType('Array')
