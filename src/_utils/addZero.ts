/**
 * @name 个位数补零
 * @param {number} m 数字
 * @returns 数字
 * @example 
 * addZero(9) ----  09
 */
const addZero = (m: Number) => {
    return m < 10 ? '0' + m : m;
}

export default addZero