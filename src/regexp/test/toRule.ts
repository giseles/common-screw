import { regList } from "../regList"
import { toRule } from "../toRule"

test("判断是否为用户名", () => {
  expect(toRule(regList.account.pattern, "admin")).toBe(true)
})

test("判断是否为密码", () => {
  expect(toRule(regList.password.pattern, "admin")).toBe(false)
})

test("判断是否为密码", () => {
  expect(toRule(regList.password.pattern, "admin22")).toBe(true)
})
