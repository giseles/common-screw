/**
 * @name   判断是否为手机号
 * @param  {String|Number} 手机号 
 * @example
 * isPhoneNum(1802023303)   ---- true
 * isPhoneNum(1)            ---- false
 */
export const isPhoneNum = (str: any) => {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}
