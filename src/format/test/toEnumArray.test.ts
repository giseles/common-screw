import { toEnumArray } from '../toEnumArray';

const tar = { a: 1 }
test('将对象 => 数组格式', () => {
    expect(toEnumArray(tar)).toEqual([{ id: "a", value: 1 }])
})

test('将对象 => 数组格式', () => {
    expect(toEnumArray(tar, 'id', 'value')).toEqual([{ id: "a", value: 1 }])
})
test('将对象 => 数组格式', () => {
    expect(toEnumArray()).toEqual([])
})