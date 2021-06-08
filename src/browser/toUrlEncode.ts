import { LooseObject } from '../_interface/LooseObject'

/**
 * @name 对象转url参数
 * @param {Object} data 数据 
 * @example

 */
export const toUrlEncode = (data: LooseObject = {}) => {
    const result = Object.keys(data).map(key => {
        if (typeof data[key] === 'object') {
            return `${key}=${JSON.stringify(data[key])}`
        } else {
            return `${key}=${data[key]}`
        }
    });
    return result.join('&');
};
