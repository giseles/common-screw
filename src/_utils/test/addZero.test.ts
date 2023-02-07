import addZero from "../addZero"

test("addZero 0", () => {
  expect(addZero(0)).toBe("00")
})

test("addZero 9", () => {
  expect(addZero(9)).toBe("09")
})
test("addZero 10", () => {
  expect(addZero(10)).toBe(10)
})

// export const ToExpect = (fn: any, param: any, res: any) =>
//   test(fn + param + res, () => {
//     expect(fn(param)).toBe(res)
//   })

// ToExpect(addZero, 0, 0)
// ToExpect(addZero, 10, 10)
// ToExpect(addZero, 7, "7")
