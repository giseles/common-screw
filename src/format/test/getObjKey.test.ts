import { getObjKey } from '../getObjKey';


test('获取对象属性', () => {
    expect(getObjKey({ 'a': 1 }, 'a')).toBe(1)
})

test('获取对象属性', () => {
    expect(getObjKey(null, 'a')).toBe("-")
})

test('获取对象属性', () => {
    expect(getObjKey([], 'a')).toBe("-")
})

test('获取对象属性', () => {
    expect(getObjKey({ 'a': 1 }, 'b')).toBe("-")
})
test('获取对象属性', () => {
    expect(getObjKey({ 'a': 1, 'b': undefined }, 'b')).toBe(undefined)
})