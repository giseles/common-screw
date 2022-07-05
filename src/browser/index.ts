import { copyToClipboard } from "./copyToClipboard"
import { getUrlParam } from "./getUrlParam"
import { toUrlEncode } from "./toUrlEncode"
import { storage } from "./storage"

export * from "./copyToClipboard"
export * from "./getUrlParam"
export * from "./toUrlEncode"
export * from "./storage"

/**
 * @name 浏览器 类方法
 * @example
 * copyToClipboard    //复制到粘贴板
 * getUrlParam        //获取url参数
 * toUrlEncode        //对象转url参数
 * storage            //改造localStorage
 */
export const CSBrowser = {
  copyToClipboard,
  getUrlParam,
  toUrlEncode,
  storage
}
