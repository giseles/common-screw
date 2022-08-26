/**
 * @name: 获取操作系统类型
 * @returns {String} 操作系统类型
 * @example getOS()
 */
export const getOS = (): string => {
  let userAgent = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(userAgent),
    isSymbian = /(?:SymbianOS)/.test(userAgent),
    isAndroid = /(?:Android)/.test(userAgent),
    isFireFox = /(?:Firefox)/.test(userAgent),
    isChrome = /(?:Chrome|CriOS)/.test(userAgent),
    isTablet =
      /(?:iPad|PlayBook)/.test(userAgent) ||
      (isAndroid && !/(?:Mobile)/.test(userAgent)) ||
      (isFireFox && /(?:Tablet)/.test(userAgent)),
    isPhone = /(?:iPhone)/.test(userAgent) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian
  if (isWindowsPhone) return "Windows Phone"
  if (isSymbian) return "Symbian"
  if (isTablet) return "Tablet"
  if (isPhone) return "Ios"
  if (isAndroid) return "Android"
  if (isFireFox) return "FireFox"
  if (isChrome) return "Chrome"
  if (isPc) return "Pc"
  return "Unkonwn"
}
