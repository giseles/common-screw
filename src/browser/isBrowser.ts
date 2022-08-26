/**
 * @name 检查是否为浏览器环境
 * @return {boolean}
 * @desc 检测代码是否运行在浏览器环境
 * @example
 * if (isBrowser()) {...}
 */
export const isBrowser = () =>
  typeof window === "object" && typeof document === "object"
