// 保留小数点（非四舍五入）
export const toFixed = (n: any, fixed: number = 2) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);