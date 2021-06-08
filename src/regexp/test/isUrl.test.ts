import { isUrl } from '../isUrl';


test('判断是否为URL地址', () => {
    expect(isUrl('baidu.com')).toBe(true)
})
test('判断是否为URL地址', () => {
    expect(isUrl('baidu')).toBe(false)
})
test('判断是否为URL地址', () => {
    expect(isUrl('www.baidu.com')).toBe(true)
})
test('判断是否为URL地址', () => {
    expect(isUrl('www.baidu.com?s=3&d=3')).toBe(true)
})