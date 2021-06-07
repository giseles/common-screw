export const debounce = (fn: any, ms = 0) => {
    let timeoutId: any;
    return function (...args: any) {
        clearTimeout(timeoutId);
        // @ts-ignore
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

//   window.addEventListener(
//     'resize',
//     debounce(() => {
//       console.log(window.innerWidth);
//       console.log(window.innerHeight);
//     }, 250)
//   ); // Will log the window dimensions at most every 250ms