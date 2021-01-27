import addZero from './addZero'

const downDate = (timestamp = +new Date()) => {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const M = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    return y + '' + addZero(M) + '' + addZero(d) + '' + addZero(h) + '' + addZero(m);
}

export default downDate