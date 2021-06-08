import { isNil } from '../isNil';

test('判断类型-是否为空', () => {
    expect(isNil('')).toBe(true)
})

test('判断类型-是否为空', () => {
    expect(isNil(null)).toBe(true)
})

test('判断类型-是否为空', () => {
    expect(isNil(undefined)).toBe(true)
})

test('判断类型-是否为空', () => {
    expect(isNil({})).toBe(true)
})

test('判断类型-是否为空', () => {
    expect(isNil({ a: 1 })).toBe(false)
})
test('判断类型-是否为空', () => {
    expect(isNil([2, 3])).toBe(false)
})
test('判断类型-是否为空', () => {
    expect(isNil(3)).toBe(false)
})
