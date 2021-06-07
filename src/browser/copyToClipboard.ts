export const copyToClipboard = (str: any) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    const selected =
        // @ts-ignore
        document.getSelection().rangeCount > 0
            // @ts-ignore
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        // @ts-ignore
        document.getSelection().removeAllRanges();
        // @ts-ignore
        document.getSelection().addRange(selected);
    }
};
//   copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
