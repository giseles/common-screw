/**
 * @name   判断是否为密码 [min,max]字母和数字组合
 * @param  {String} str  密码
 * @param  {Number} min  最小位数
 * @param  {Number} max  最大位数
 * @example
 * isPassword(1222qq.com)   ---- true
 * isPassword(1)            ---- false
 */
export const isPassword = (str: any, min = 6, max = 12) => {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(str);
}
// '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,26}$', // 6-26字母和数字组合