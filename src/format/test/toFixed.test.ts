import { toFixed } from '../toFixed';


test('保留小数点（非四舍五入）', () => {
    expect(toFixed(11.3632)).toBe(11.36)
})

test('保留小数点（非四舍五入）', () => {
    expect(toFixed(11.363222, 4)).toBe(11.3632)
})