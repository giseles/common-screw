import { randomNum } from '../randomNum';

test('生成指定范围[min, max]的随机数', () => {
    expect(randomNum()).toBeGreaterThanOrEqual(0)
    expect(randomNum()).toBeLessThanOrEqual(100)
})

test('生成指定范围[min, max]的随机数', () => {
    expect(randomNum(1, 10)).toBeGreaterThanOrEqual(0)
    expect(randomNum(1, 10)).toBeLessThanOrEqual(10)
})
