import { addUnit } from "./addUnit"
import { getObjKey } from "./getObjKey"
import { toEnum } from "./toEnum"
import { toEnumArray } from "./toEnumArray"
import { toFixed } from "./toFixed"
import { toString } from "./toString"

export * from "./addUnit"
export * from "./getObjKey"
export * from "./toEnum"
export * from "./toEnumArray"
export * from "./toFixed"
export * from "./toString"

/**
 * @name 格式 类方法
 * @example
 * addUnit        //将数字加上单位
 * getObjKey      //获取对象属性
 * toEnum         //将数组 => 对象格式
 * toEnumArray    //将对象 => 数组格式
 * toFixed        //保留小数点（非四舍五入）
 * toString       //字符串转换
 */
export const CSFormat = {
  addUnit,
  getObjKey,
  toEnum,
  toEnumArray,
  toFixed,
  toString
}
