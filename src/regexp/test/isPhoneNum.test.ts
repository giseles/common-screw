import { isPhoneNum } from '../isPhoneNum';


test('判断是否为手机号', () => {
    expect(isPhoneNum(1802023303)).toBe(false)
})
test('判断是否为手机号', () => {
    expect(isPhoneNum(1803)).toBe(false)
})
test('判断是否为手机号', () => {
    expect(isPhoneNum(18703003351)).toBe(true)
})