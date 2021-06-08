/**
 * @name 节流
 * @param fn 方法
 * @param wait 时间
 * @example
 * 类似控制阀门一样定期开放的函数，也就是让函数执行一次后
 * 在某个时间段内暂时失效，过了这段时间后再重新激活
 * window.addEventListener(
 *  'resize',
 *  throttle(() => {
 *    console.log(window.innerWidth);
 *   }, 250)
 * ); 
 */
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