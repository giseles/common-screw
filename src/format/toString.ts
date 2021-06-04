import isType from '../_utils/isType'
/**
 * @name 字符串转换
 * @param value 值
 * @example 
 * toString(23.3)        ----  '23.3'
 * toString(null)        ----  ''
 * toString(undefined)   ----  ''
 * toString({ d: 2 })    ----  ''
 * toString([2,4])       ----  ''
 */
export const toString = (value: any) => {
    let val;
    if (value == undefined || '' || null) {
        val = '';
    } else if (typeof (value) === 'object') {
        val = ''
    } else {
        typeof value == 'string' ? val = value : val = value.toString();
    }
    return val;
};