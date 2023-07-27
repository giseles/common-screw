import { debounce } from "./debounce"
import { deepClone } from "./deepClone"
import { delay } from "./delay"
import { throttle } from "./throttle"

export * from "./debounce"
export * from "./deepClone"
export * from "./delay"
export * from "./throttle"

/**
 * @name 常用函数 类方法
 * @example
 * debounce     //防抖
 * deepClone    //深拷贝
 * delay        //延迟
 * throttle     //节流
 */
export const CSFunction = {
  debounce,
  deepClone,
  delay,
  throttle
}
