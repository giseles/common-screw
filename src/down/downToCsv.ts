import downDate from '../_utils/downDate'


/**
 * @name 下载csv文件
 * @param data 文件内容
 * @param name 文件名
 * @param time 是否需要日期
 * @example	
 * downToCsv(data,'文件名')
 */
export const downToCsv = (data: any, name: string, time: boolean = true) => {
    let fileName = time ? name + ' ' + downDate() : name;
    const blob = new Blob(['\ufeff' + data], { type: 'text/csv' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, fileName);
    } else {
        const element = document.createElement('a');
        element.href = window.URL.createObjectURL(blob);
        element.download = fileName + '.csv';
        element.click();
    }

}