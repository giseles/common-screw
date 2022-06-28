/**
 * @name   判断是否为指定格式
 * @param {Any} reg 规则
 * @param {String} str 需验证字符串
 * @example
 * toRule(REG_LIST.account.pattern,'admin')    ---- true
 * toRule(REG_LIST.password.pattern,'admin')   ---- false
 */
export const toRule = (reg: any, str: string) => {
  return new RegExp(reg).test(str)
}
