import { isArray } from '../isArray';

test('isNullOrUnfined 300', () => {
    expect(isArray([1, 2, 3])).toBe(true)
})

test('isNullOrUnfined "" ', () => {
    expect(isArray('')).toBe(false)
})

test('isNullOrUnfined null', () => {
    expect(isArray(null)).toBe(false)
})

test('isNullOrUnfined {}', () => {
    expect(isArray({})).toBe(false)
})
