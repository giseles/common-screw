import addZero from '../_utils/addZero'

/**
 * @name 时间戳转日期
 * @param {Number} timestamp 时间戳
 * @returns {Date} 日期+时间
 * @example
 *  timestampToDate()              ---- 2021-06-03 17:06:29
 *  timestampToDate(1622711246300) ---- 2021-06-03 17:07:26
 */
export const timestampToDate = (timestamp = +new Date()) => {
    if (timestamp) {
        const time = new Date(timestamp);
        const y = time.getFullYear();
        const M = time.getMonth() + 1;
        const d = time.getDate();
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();
        return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
    } else {
        return '';
    }
}
