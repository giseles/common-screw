import { isArray, isBoolean } from "../common"

test("判断类型-数组", () => {
  expect(isArray([1, 2, 3])).toBe(true)
})

test("判断类型-数组 ", () => {
  expect(isArray("")).toBe(false)
})

test("判断类型-数组", () => {
  expect(isArray(null)).toBe(false)
})

test("判断类型-数组", () => {
  expect(isArray({})).toBe(false)
})

test("判断类型-布尔值", () => {
  expect(isBoolean(true)).toBe(true)
})

test("判断类型-布尔值", () => {
  expect(isBoolean(false)).toBe(true)
})

test("判断类型-布尔值", () => {
  expect(isBoolean(1)).toBe(false)
})
