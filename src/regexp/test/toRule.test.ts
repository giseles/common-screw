import { REG_LIST, toRule } from "../index"

test("判断是否为用户名", () => {
  expect(toRule(REG_LIST.account.pattern, "admin")).toBe(true)
})

test("判断是否为密码", () => {
  expect(toRule(REG_LIST.password.pattern, "admin")).toBe(false)
})

test("判断是否为密码", () => {
  expect(toRule(REG_LIST.password.pattern, "admin22")).toBe(true)
})
