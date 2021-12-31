/**
 * @name   判断是否为密码
 * @param  {String} str  密码
 * @param  {Number} min  最小位数 = 6
 * @param  {Number} max  最大位数 = 20
 * @description [min,max] 字母，数字，字符中的两种以上
 * @example
 * isPassword('xjn4456')       ---- true
 * isPassword('x33j', 1, 5)    ---- true
 */
export const isPassword = (str: any, min = 6, max = 20) => {
  return new RegExp(
    "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{" +
      min +
      "," +
      max +
      "}$"
  ).test(str)
}
