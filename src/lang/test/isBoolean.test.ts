import { isBoolean } from '../isBoolean';

test('判断类型-布尔值', () => {
    expect(isBoolean(true)).toBe(true)
})

test('判断类型-布尔值', () => {
    expect(isBoolean(false)).toBe(true)
})

test('判断类型-布尔值', () => {
    expect(isBoolean(1)).toBe(false)
})