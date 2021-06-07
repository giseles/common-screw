import isType from '../isType';

// test("isArray ''", () => {
//     expect(isType('Array')('')).toBe(false);
// })

describe('isType---Array', () => {
    const isArray = isType('Array')

    test('isArray []', () => {
        expect(isArray([])).toBe(true);
    })
    test("isArray ''", () => {
        expect(isArray('')).toBe(false);
    })
    test('isArray {}', () => {
        expect(isArray({})).toBe(false);
    })
})

describe('isType---String', () => {
    const isString = isType('String')

    test("isString '33'", () => {
        expect(isString('33')).toBe(true);
    })
    test('isString []', () => {
        expect(isString([])).toBe(false);
    })
    test("isString 2", () => {
        expect(isString(2)).toBe(false);
    })
    test('isString {}', () => {
        expect(isString({})).toBe(false);
    })
    test('isString true', () => {
        expect(isString(true)).toBe(false);
    })
})