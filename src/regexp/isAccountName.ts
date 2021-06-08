/**
 * @name   判断是否为用户名
 * @param  {String} str  用户名
 * @param  {Number} min  最小位数 4
 * @param  {Number} max  最大位数 20
 * @description [min,max] 字母，数字，下划线，减号
 * @example
 * isAccountName('admin')         ---- true
 * isAccountName('admin',1,5)     ---- true
 */
export const isAccountName = (str: any, min = 4, max = 20) => {
    return new RegExp("^[a-zA-Z0-9_-]{" + min + "," + max + "}$").test(str);
}