/**
 * @name   判断是否为URL地址
 * @param  {String} str URL地址
 * @example
 * isUrl(baidu.com)    ---- true
 * isUrl(1)            ---- false
 */
export const isUrl = (str: any) => {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    str
  )
}
