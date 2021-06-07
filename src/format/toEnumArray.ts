
/**
 * @name 将枚举转为Json格式
 * @param {object} data 枚举 
 * @example 
 * toEnumArray({a:1})   ----  [{value: "a",text: 1}]
 * toEnumArray({})      ----  []
 * toEnumArray(2)       ----  []
 * toEnumArray()        ----  []
 */
export const toEnumArray = (data: any = [], id: any = 'id', value: any = 'value') => {
    return Object.keys(data).map(key => ({ [id]: key, [value]: data[key] }));
};