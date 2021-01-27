export const toString = (value: any) => {
    let val;
    if (value == undefined || '' || null) {
        val = '';
    } else {
        typeof value == 'string' ? val = value : val = value.toString();
    }
    return val;
};