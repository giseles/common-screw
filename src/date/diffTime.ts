/**
 * @name 日期间隔时间
 * @param {String} startDate  日期1
 * @param {String} endDate    日期2
 * @param {Boolean} typeArray    是否转为数组 = false
 * @example
 *  diffTime('2020-10-15', '2020-10-26 12:00')           ---- 11天12小时
 *  diffTime('2020-10-26', '2020-10-29 12:22:33', true)  ---- [3, 12, 22]
 */
export const diffTime = (
  startDate: String,
  endDate: String,
  typeArray = false
) => {
  const diff =
    Date.parse(endDate.replace(/-/g, "/")) -
    Date.parse(startDate.replace(/-/g, "/"))

  // 计算出相差天数
  const days = Math.floor(diff / (24 * 3600 * 1000))

  // 计算出小时数
  const diff1 = diff % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
  const hours = Math.floor(diff1 / (3600 * 1000))
  // 计算相差分钟数
  const diff2 = diff1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(diff2 / (60 * 1000))
  if (typeArray) return [days, hours, minutes]
  let returnStr = ""
  if (minutes > 0) {
    returnStr = minutes + "分" + returnStr
  }
  if (hours > 0) {
    returnStr = hours + "小时" + returnStr
  }
  if (days > 0) {
    returnStr = days + "天" + returnStr
  }
  return returnStr
}
