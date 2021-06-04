/**
 * @name 通过url下载文件
 * @param url url地址
 * @param filename 文件名
 */
export function downUrl(url: string, filename: string) {
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}
