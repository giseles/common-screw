import downDate from '../_utils/downDate'


/**
 * @name 下载csv文件
 * @param data 文件内容
 * @param name 文件名
 */
export const downFile = (data: any, name: string) => {
    let fileName = name + downDate();
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