export function downUrl(url: string, filename: string) {
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}
