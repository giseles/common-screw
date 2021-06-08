import { isArray } from '../isArray';

test('判断类型-数组', () => {
    expect(isArray([1, 2, 3])).toBe(true)
})

test('判断类型-数组 ', () => {
    expect(isArray('')).toBe(false)
})

test('判断类型-数组', () => {
    expect(isArray(null)).toBe(false)
})

test('判断类型-数组', () => {
    expect(isArray({})).toBe(false)
})
