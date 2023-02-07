/**
 *
 * @name 生成指定范围[min,max]的随机数
 * @param {Number} min 最小值 = 0
 * @param {Number} max 最大值 = 100
 * @example
 * randomNum()         ---- 0 ~ 100
 * randomNum(1,10)     ---- 1 ~ 10
 */
export const randomNum = (min: number = 0, max: number = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
