import { LooseObject } from "../_interface"
/**
 * @name 将数组 => 对象格式
 * @param {Any} data 枚举
 * @param {Any} id 属性名 = 'id'
 * @param {Any} value 属性值名 = 'value'
 * @example
 * toEnum([{id: "1",value: aa}])   ----  {1:aa}
 * toEnum({})      ----  []
 * toEnum(2)       ----  []
 * toEnum()        ----  []
 */
export const toEnum = (
  data: any = [],
  id: any = "id",
  value: any = "value"
) => {
  let res: LooseObject = {},
    len = data.length
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      let key = data[i][id]
      res[key] = data[i][value]
    }
  }
  return res
}
