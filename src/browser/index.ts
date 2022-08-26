import { copyToClipboard } from "./copyToClipboard"
import { getUrlParam } from "./getUrlParam"
import { isBrowser } from "./isBrowser"
import { toUrlEncode } from "./toUrlEncode"
import { url } from "./url"

export * from "./copyToClipboard"
export * from "./getUrlParam"
export * from "./isBrowser"
export * from "./toUrlEncode"
export * from "./url"

/**
 * @name 浏览器 类方法
 * @example
 * copyToClipboard    //复制到粘贴板
 * getUrlParam        //获取url参数
 * isBrowser          //检查是否为浏览器环境
 * toUrlEncode        //对象转url参数
 * url                //操作URL
 */
export const CSBrowser = {
  copyToClipboard,
  getUrlParam,
  isBrowser,
  toUrlEncode,
  url
}
