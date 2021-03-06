import isType from '../_utils/isType'

/**
 * @name 判断类型-数组
 * @example
 *  isArray([])       ---- true
 *  isArray([3,2])    ---- true
 *  isArray(33)       ---- false
 *  
 */
export const isArray = isType('Array')
