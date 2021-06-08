/**
 * 
 * @name 生成指定范围[min, max]的随机数
 * @param  {Number} 最小值 
 * @param  {Number} 最大值 
 * @example
 * randomNum(1,10)
 */
export const randomNum = (min: any, max: any) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// module.exports = randomNum;