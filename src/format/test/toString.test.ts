import { toString } from '../toString';


test('字符串转换', () => {
    expect(toString(11.3632)).toBe('11.3632')
})

test('字符串转换', () => {
    expect(toString(null)).toBe('')
})
test('字符串转换', () => {
    expect(toString({})).toBe('')
})

test('字符串转换', () => {
    expect(toString('ffd')).toBe('ffd')
})