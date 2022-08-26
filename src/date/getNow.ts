import { timestampToDate } from "./timestampToDate"
/**
 * @name 获取当前时间
 * @returns {Date} 日期+时间
 * @example getNow()  ---- 2021-06-03 17:06:29
 */
export const getNow = () => timestampToDate()
