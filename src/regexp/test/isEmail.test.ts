import { isEmail } from '../isEmail';


test('判断是否为邮箱地址', () => {
    expect(isEmail('1222@qq.com')).toBe(true)
})

test('判断是否为邮箱地址', () => {
    expect(isEmail('1222m')).toBe(false)
})