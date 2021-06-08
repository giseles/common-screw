/**
 * @name   判断是否为用户名
 * @param  {String} str  用户名
 * @example
 * isAccountName(1222qq.com)   ---- true
 * isAccountName(1)            ---- false
 */
export const isAccountName = (str: any) => {
    return /^(?=.*\\d)(?=.*[a-zA-Z])(?=.*[_\\W]).{8,}$/.test(str);
}
