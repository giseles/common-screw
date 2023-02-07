/**
 * @name 加前后天数
 * @param {String} date 日期
 * @param {Number} n 天数 = 0
 * @returns {Date} 日期
 * @example
 *  addDaysToDate("", 0)            ---- 2020-10-25
 *  addDaysToDate('2020-10-15', 10)   ---- 2020-10-25
 *  addDaysToDate('2020-10-15', -10)  ---- 2020-10-05
 */
export const addDaysToDate = (date: string = "", n: number = 0) => {
  const d = date === "" ? new Date() : new Date(date)
  d.setDate(d.getDate() + n)
  return d.toISOString().split("T")[0]
}
