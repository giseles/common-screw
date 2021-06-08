import { addMinutesToDate } from '../addMinutesToDate';

test('日期加前后分钟数', () => {
    expect(addMinutesToDate()).toBeDefined();
})

test('日期加前后分钟数', () => {
    expect(addMinutesToDate('2020-10-19 12:00:00', 10)).toBe('2020-10-19 12:10:00');
})

test('日期加前后分钟数', () => {
    expect(addMinutesToDate('2020-10-19', -10)).toBe('2020-10-19 07:50:00');
})