import { timestampToDateNoTime } from "../timestampToDateNoTime"

test("时间戳转日期 无时间", () => {
  expect(timestampToDateNoTime()).toBeDefined()
})

test("日期转时间戳 无时间", () => {
  expect(timestampToDateNoTime(1622711246300)).toBe("2021-06-03")
})
