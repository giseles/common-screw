import { isNil } from "../lang/isNil"
/**
 * @name 数字后加单位
 * @param {unknown} num 数值
 * @param {String} unit 单位
 * @param {Any} nullShow 如果num不存在返回值 = '-'
 * @example
 * addUnit(0, 'V')                ----  '0 V'
 * addUnit(3, 'V')                ----  '3 V'
 * addUnit(undefined, 'V')        ----  '-'
 * addUnit(undefined, 'V','无')   ----  '无'
 */
export const addUnit = (num: unknown, unit: string, nullShow: any = "-") => {
  if (isNil(num)) {
    return nullShow
  } else {
    return num + " " + unit
  }
}
