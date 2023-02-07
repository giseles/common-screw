export const ToExpect = (fn: any, param: any, res: any) =>
  test(fn + param + res, () => {
    expect(fn(param)).toBe(res)
  })
