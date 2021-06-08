import { timestampToDate } from '../timestampToDate';

test('时间戳转日期', () => {
    expect(timestampToDate()).toBeDefined();
})

test('日期转时间戳', () => {
    expect(timestampToDate(1622711246300)).toBe('2021-06-03 17:07:26')
})