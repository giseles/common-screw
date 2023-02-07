/**
 * @name 保留小数点（非四舍五入）
 * @param {Any} n 数字
 * @param {number} fixed 位数 = 2
 * @example
 * toFixed(11.3632)         ----  11.36
 * toFixed(11.363222,4)     ----  11.3632
 * toFixed('3322.54646')    ----  3322.54
 * toFixed(0)               ----  0
 * toFixed(2)               ----  2
 */
export const toFixed = (n: any, fixed: number = 2) =>
  ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)
