import addZero from '../_utils/addZero'

/**
* @function 时间戳转日期 无时间  
* @param {Number} timestamp 时间戳
* @returns {Date} 日期
* @example
*  timestampToDateNoTime()                ---- 2021-06-03
*  timestampToDateNoTime(1622711246300)   ---- 2021-06-03
*/
export const timestampToDateNoTime = (timestamp = +new Date()) => {
    if (timestamp) {
        const time = new Date(timestamp);
        const y = time.getFullYear();
        const M = time.getMonth() + 1;
        const d = time.getDate();
        return y + '-' + addZero(M) + '-' + addZero(d);
    } else {
        return '';
    }
}
