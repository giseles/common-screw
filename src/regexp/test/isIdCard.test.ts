import { isIdCard } from '../isIdCard';


test('判断是否为身份证号', () => {
    expect(isIdCard(3622222222)).toBe(false)
})
test('判断是否为身份证号', () => {
    expect(isIdCard(362326196602030069)).toBe(true)
})