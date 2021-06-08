import { toUrlEncode } from '../toUrlEncode';

test('对象转url参数', () => {
    expect(toUrlEncode({})).toBe('')
})

test('对象转url参数', () => {
    expect(toUrlEncode({ a: 3 })).toBe("a=3")
})
test('对象转url参数', () => {
    expect(toUrlEncode({ a: 1, b: 3 })).toBe("a=1&b=3")
})

test('对象转url参数', () => {
    expect(toUrlEncode({ a: { b: 2 }, c: 4 })).toBe("a={\"b\":2}&c=4")
})

test('', () => {
    // @ts-ignore
    expect(toUrlEncode('a')).toBe('')
})
test('', () => {
    expect(toUrlEncode()).toBe('')
})