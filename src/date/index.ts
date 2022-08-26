import { addDaysToDate } from "./addDaysToDate"
import { addMinutesToDate } from "./addMinutesToDate"
import { dateToTimestamp } from "./dateToTimestamp"
import { diffTime } from "./diffTime"
import { formatDate } from "./formatDate"
import { getNowTime } from "./getNowTime"
import { timestampToDate } from "./timestampToDate"
import { timestampToDateNoTime } from "./timestampToDateNoTime"

export * from "./addDaysToDate"
export * from "./addMinutesToDate"
export * from "./dateToTimestamp"
export * from "./diffTime"
export * from "./formatDate"
export * from "./getNowTime"
export * from "./timestampToDate"
export * from "./timestampToDateNoTime"

/**
 * @name 日期 类方法
 * @example
 * addDaysToDate           //加前后天数
 * addMinutesToDate        //加前后分钟数
 * dateToTimestamp         //日期转时间戳
 * diffTime                //日期间隔时间
 * formatDate              //格式化时间
 * getNowTime              //获取当前时间
 * timestampToDate         //时间戳转日期
 * timestampToDateNoTime   //时间戳转日期 无时间
 */
export const CSDate = {
  addDaysToDate,
  addMinutesToDate,
  dateToTimestamp,
  diffTime,
  formatDate,
  getNowTime,
  timestampToDate,
  timestampToDateNoTime
}
