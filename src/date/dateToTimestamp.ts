
/**
* @name 日期转时间戳  
* @param {Date} date 日期
* @returns {Number} 时间戳
* @example
*  dateToTimestamp()                ---- 1622710724
*  dateToTimestamp('2020-10-15')    ---- 1602720000
*/
export const dateToTimestamp = (date: any = null) => {
    let newDate;
    if (date) {
        newDate = new Date(date)
    } else {
        newDate = new Date()
    }
    return Math.floor(newDate.getTime() / 1000)
}