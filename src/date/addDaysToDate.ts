
/**
 * @function 加前后天数
 * @param {Any} date 日期
 * @param {Number} n    天数
 * @returns {Date} 日期
 * @example
 *  addDaysToDate(null, 0)            ---- 2020-10-25
 *  addDaysToDate('2020-10-15', 10)   ---- 2020-10-25
 *  addDaysToDate('2020-10-15', -10)  ---- 2020-10-05
 */
export const addDaysToDate = (date: any = null, n: number) => {
  const d = date === null ? new Date() : new Date(date);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
};