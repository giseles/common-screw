/**
 * @name 将枚举转为Json格式
 * @param {object} data 枚举 
 * @example 
 * toJson({a:1})   ----  [{value: "a",text: 1}]
 * toJson({})      ----  []
 * toJson(2)       ----  []
 * toJson()        ----  []
 */
export const toJson = (data: any = {}) => {
    return Object.keys(data).map(key => ({ value: key, text: data[key] }));
};