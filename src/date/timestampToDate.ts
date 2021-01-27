import addZero from '../_utils/addZero'

export const timestampToDate = (timestamp = +new Date()) => {
    if (timestamp) {
        var time = new Date(timestamp);
        var y = time.getFullYear();
        var M = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
    } else {
        return '';
    }
}
