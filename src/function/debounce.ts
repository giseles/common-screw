/**
 * @name 防抖
 * @param fn 方法
 * @param ms 时间
 * @example
 * 在第一次触发事件时，不立即执行函数，而是给一个期限值2s
 * 如果在2s内没有再次触发滚动事件，那么就执行函数
 * 如果在2s内再次触发滚动事件，那么当前计时取消，重新计时
 * window.addEventListener(
 *  'resize',
 *  debounce(() => {
 *    console.log(window.innerWidth);
 *   }, 250)
 * ); 
 */
export const debounce = (fn: any, ms = 0) => {
    let timeoutId: any;
    return function (...args: any) {
        clearTimeout(timeoutId);
        // @ts-ignore
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};