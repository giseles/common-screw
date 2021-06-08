import { LooseObject } from "../_interface/LooseObject";

/**
 * @name 获取url参数
 * @param {String} url url地址 
 * @example
 *  getUrlParam('www.baidu.com?a=3')   ---- { "a": "3" }
 *  getUrlParam('www.baidu.com')       ---- {}
 */
export const getUrlParam = (url: String) => {
    let obj: LooseObject = {}
    if (url.indexOf("?") == -1) {
        return {}
    }
    let query = url.split("?")[1]
    let queryArr = query.split("&")
    queryArr.forEach(function (item) {
        let key = item.split("=")[0]
        obj[key] = item.split("=")[1]
    });
    return obj;
}
