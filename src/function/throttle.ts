/**
 * @name 节流
 * @param {Function} fn 方法
 * @param {Number} wait 时间
 * @description
 * 规定在时间内，只能触发一次函数。如果这个时间内触发多次函数，只有一次生效
 * @example
 * 鼠标不断点击触发
 * 监听滚动事件
 * window.addEventListener(
 *  'resize',
 *  throttle(() => {
 *    console.log(window.innerWidth);
 *   }, 250)
 * ); 
 */
export const throttle = (fn: any, wait: number = 500) => {
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