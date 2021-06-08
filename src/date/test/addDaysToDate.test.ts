import { addDaysToDate } from '../addDaysToDate';

test('日期加前后天数', () => {
    expect(addDaysToDate()).toBeDefined();
})

test('日期加前后天数', () => {
    expect(addDaysToDate('2020-10-15', 10)).toBe('2020-10-25')
})

test('日期加前后天数', () => {
    expect(addDaysToDate('2020-10-15', -10)).toBe('2020-10-05')
})