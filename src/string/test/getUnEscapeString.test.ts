import { getUnEscapeString } from "../index"

test("字符串的反转义 getUnEscapeString", () => {
  expect(getUnEscapeString("&amp;")).toBe("&")
})

test("字符串的转义 getEscapeString", () => {
  expect(getUnEscapeString("&lt;")).toBe("<")
})

test("字符串的转义 getEscapeString", () => {
  expect(getUnEscapeString("&gt;")).toBe(">")
})

test("字符串的转义 getEscapeString", () => {
  expect(getUnEscapeString("&quot;")).toBe('"')
})

test("字符串的转义 getEscapeString", () => {
  expect(getUnEscapeString("&#x27;")).toBe("'")
})
