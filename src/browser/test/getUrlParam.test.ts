import { getUrlParam } from '../getUrlParam';

test('获取url参数', () => {
    expect(getUrlParam('')).toEqual({})
})

test('获取url参数', () => {
    expect(getUrlParam('www.baidu.com?a=3')).toEqual({ "a": "3" })
})
test('获取url参数', () => {
    expect(getUrlParam('www.baidu.com?a=3&b=3&d=3')).toEqual({ "a": "3", "b": "3", "d": "3" })
})

test('获取url参数', () => {
    expect(getUrlParam('www.baidu.com')).toEqual({})
})
