/**
 * @name 检查是否为浏览器环境
 * @example
 * console.log(isBrowser)
 */
export const isBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)
