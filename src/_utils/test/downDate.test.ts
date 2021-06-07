import downDate from '../downDate';

test('downDate (1622711246300)', () => {
    expect(downDate(1622711246300)).toBe('2021-06-03 17_07')
})
test('downDate', () => {
    expect(downDate()).toBeDefined();
})
