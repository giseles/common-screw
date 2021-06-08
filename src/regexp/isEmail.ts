/**
 * @name   判断是否为邮箱地址
 * @param  {String}  邮箱
 * @example
 * isEmail(1222qq.com)   ---- true
 * isEmail(1)            ---- false
 */
export const isEmail = (str: any) => {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
