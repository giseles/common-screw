/**
 * @name  判断是否为身份证号
 * @param  {String|Number} 身份证号 
 * @example
 * isIdCard(3622222222)   ---- true
 * isIdCard(1)            ---- false
 */
export const isIdCard = (str: any) => {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}
