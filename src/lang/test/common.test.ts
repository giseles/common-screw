import {
  isArray,
  isBoolean,
  isObject,
  isFunction,
  isString,
  isNumber,
  isUndefined
} from "../common"

// 判断类型-数组
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

// 判断类型-布尔值
test("判断类型-布尔值", () => {
  expect(isBoolean(true)).toBe(true)
})

test("判断类型-布尔值", () => {
  expect(isBoolean(false)).toBe(true)
})

test("判断类型-布尔值", () => {
  expect(isBoolean(1)).toBe(false)
})

// 判断类型-对象
test("判断类型-对象", () => {
  expect(isObject({})).toBe(true)
})
test("判断类型-对象", () => {
  expect(isObject(1)).toBe(false)
})

// 判断类型-函数
test("判断类型-函数", () => {
  expect(isFunction(() => {})).toBe(true)
})
test("判断类型-函数", () => {
  expect(isFunction(11)).toBe(false)
})

// 判断类型-字符串
test("判断类型-字符串", () => {
  expect(isString("11")).toBe(true)
})
test("判断类型-字符串", () => {
  expect(isString(22)).toBe(false)
})

// 判断类型-数字
test("判断类型-数字", () => {
  expect(isNumber(11)).toBe(true)
})
test("判断类型-数字", () => {
  expect(isNumber("11")).toBe(false)
})

// 判断类型-undefined
test("判断类型-undefined", () => {
  expect(isUndefined(undefined)).toBe(true)
})
test("判断类型-undefined", () => {
  expect(isUndefined("11")).toBe(false)
})
