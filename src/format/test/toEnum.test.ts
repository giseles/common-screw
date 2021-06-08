import { toEnum } from '../toEnum';

const tar = [{ id: "1", value: 23 }]
test('将数组 => 对象格式', () => {
    expect(toEnum(tar)).toEqual({ 1: 23 })
})

test('将数组 => 对象格式', () => {
    expect(toEnum(tar, 'id', 'value')).toEqual({ 1: 23 })
})
test('将数组 => 对象格式', () => {
    expect(toEnum()).toEqual({})
})