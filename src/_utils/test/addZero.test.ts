import addZero from '../addZero';
import { ToExpect } from '../../_testComponent/ToExpect';

test('addZero 0', () => {
    expect(addZero(0)).toBe('00')
})


test('addZero 9', () => {
    expect(addZero(9)).toBe('09')
})
test('addZero 10', () => {
    expect(addZero(10)).toBe(10)
})


// ToExpect(addZero, 7, '7')
// ToExpect(addZero, 0, 0)
// ToExpect(addZero, 10, 10)