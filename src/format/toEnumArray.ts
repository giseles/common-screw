/**
 * @name 将对象 => 数组格式
 * @param {object} data 枚举
 * @param {Any} id 属性名 = 'id'
 * @param {Any} value 属性值名 = 'value'
 * @example
 * toEnumArray({a:1})   ----  [{id: "a",value: 1}]
 * toEnumArray({})      ----  []
 * toEnumArray(2)       ----  []
 * toEnumArray()        ----  []
 */
export const toEnumArray = (
  data: any = [],
  id: any = "id",
  value: any = "value"
) => {
  return Object.keys(data).map((key) => ({ [id]: key, [value]: data[key] }))
}
