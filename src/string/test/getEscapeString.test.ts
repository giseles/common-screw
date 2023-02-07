import { getEscapeString } from "../index"

test("字符串的转义 getEscapeString", () => {
  expect(getEscapeString("&")).toBe("&amp;")
})

test("字符串的转义 getEscapeString", () => {
  expect(getEscapeString("<")).toBe("&lt;")
})

test("字符串的转义 getEscapeString", () => {
  expect(getEscapeString(">")).toBe("&gt;")
})

test("字符串的转义 getEscapeString", () => {
  expect(getEscapeString('"')).toBe("&quot;")
})

test("字符串的转义 getEscapeString", () => {
  expect(getEscapeString("'")).toBe("&#x27;")
})
