import addZero from '../_utils/addZero'

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
