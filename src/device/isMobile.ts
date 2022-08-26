/**
 * @name 是否是移动端
 * @return {Boolean} 是否是移动端
 * @example isMobile()
 */
export const isMobile = (): boolean => {
  if (
    navigator.userAgent.match(
      /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
    )
  ) {
    return true
  }
  return false
}
