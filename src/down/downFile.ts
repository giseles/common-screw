import downDate from '../_utils/downDate'

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