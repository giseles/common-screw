import { isNil } from "../lang/isNil"
/**
 * @name 获取对象属性
 * @param {Any} obj 对象
 * @param {Any} key 属性
 * @param {Any} nullShow 如果对象属性不存在返回值 = '-'
 * @example
 * toObjKey({'a':1}, 'a')          ----  '1'
 * toObjKey(null, 'a')             ----  '-'
 * toObjKey(undefined, 'a')        ----  '-'
 * toObjKey([], 'a','无')          ----  '无'
 */
export const getObjKey = (obj: any, key: any, nullShow: any = "-") => {
  if (isNil(obj) || !obj.hasOwnProperty(key)) {
    return nullShow
  } else {
    return obj[key]
  }
}
