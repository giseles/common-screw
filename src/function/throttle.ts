export const throttle = (fn: any, wait: any) => {
    let inThrottle: any, lastFn: any, lastTime: any;
    return function () {
        // @ts-ignore
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

//   window.addEventListener(
//     'resize',
//     throttle(function(evt) {
//       console.log(window.innerWidth);
//       console.log(window.innerHeight);
//     }, 250)
//   ); // Will log the window dimensions at most every 250ms