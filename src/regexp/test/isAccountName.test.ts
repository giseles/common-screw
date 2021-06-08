import { isAccountName } from '../isAccountName';


test('判断是否为用户名', () => {
    expect(isAccountName(11.3632)).toBe(false)
})

test('判断是否为用户名', () => {
    expect(isAccountName('1dfadddddf3')).toBe(true)
})
test('判断是否为用户名', () => {
    expect(isAccountName('admin', 1, 5)).toBe(true)
})