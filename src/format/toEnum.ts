
import { LooseObject } from '../_interface/LooseObject'
/**
 * @name 将枚举转为Json格式
 * @param {object} data 枚举 
 * @example 
 * toEnum([{id: "1",value: aa}])   ----  {1:aa}
 * toEnum({})      ----  []
 * toEnum(2)       ----  []
 * toEnum()        ----  []
 */
export const toEnum = (data: any = [], id: any = 'id', value: any = 'value') => {
    let res: LooseObject = {},
        len = data.length
    if (len > 0) {
        for (let i = 0; i < len; i++) {
            let key = data[i][id]
            res[key] = data[i][value]
        }
    }
    return res
};


