import { getOS } from "./getOS"
import { isMobile } from "./isMobile"
import { isSupportCamera } from "./isSupportCamera"
import { isWeiXin } from "./isWeiXin"

export * from "./getOS"
export * from "./isMobile"
export * from "./isSupportCamera"
export * from "./isWeiXin"

/**
 * @name Device 类方法
 * @example
 * getOS               //操作系统类型
 * isMobile            //是否是移动端
 * isSupportCamera     //是否支持摄像头
 * isWeiXin            //是否是微信
 */
export const CSBrowser = {
  getOS,
  isMobile,
  isSupportCamera,
  isWeiXin
}
