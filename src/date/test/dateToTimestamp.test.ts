import { dateToTimestamp } from '../dateToTimestamp';

test('日期转时间戳', () => {
    expect(dateToTimestamp()).toBeDefined();
})

test('日期转时间戳', () => {
    expect(dateToTimestamp('2020-10-15')).toBe(1602720000)
})