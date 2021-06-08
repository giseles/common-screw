import { isPassword } from '../isPassword';


test('判断是否为密码', () => {
    expect(isPassword(3622222222)).toBe(false)
})

test('判断是否为密码', () => {
    expect(isPassword('xjn4456')).toBe(true)
})
test('判断是否为密码', () => {
    expect(isPassword('xjn445633')).toBe(true)
})
test('判断是否为密码', () => {
    expect(isPassword('xjn445dfdfsd6333333333')).toBe(false)
})
test('判断是否为密码', () => {
    expect(isPassword('x33j', 1, 5)).toBe(true)
})
test('判断是否为密码', () => {
    expect(isPassword('333@23')).toBe(true)
})
test('判断是否为密码', () => {
    expect(isPassword('33323')).toBe(false)
})
test('判断是否为密码', () => {
    expect(isPassword('zz33323')).toBe(true)
})