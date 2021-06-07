import addZero from './addZero'


/**
 * @name 下载文件日期
 * @param timestamp 时间戳
 * @example 
 * downDate() ----  2021-06-03 17:07
 */
const downDate = (timestamp = +new Date()) => {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const M = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + '_' + addZero(m);
}

export default downDate