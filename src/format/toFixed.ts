
/**
 * @name 保留小数点（非四舍五入）
 * @param n 数字
 * @param fixed 位数 默认2位
 * @example 
 * toFixed(2) ----  2.00
 */
export const toFixed = (n: any, fixed: number = 2) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);