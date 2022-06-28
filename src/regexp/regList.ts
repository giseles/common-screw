/**
 * @name   常见格式规则
 * @param  account 账号名 字母数字组合或纯字母
 * @param  password 密码 数字和字母组合
 * @param  tel 手机号
 * @param  posInt 正整数
 * @param  email 邮箱地址
 * @param  url URL地址
 * @param  idCard 身份证号
 * @example
 * pattern —— 规则
 * message —— 描述
 */
export const REG_LIST = {
  account: {
    pattern: /^(?!\d*$)[a-zA-Z\d]*$/,
    message: "字母数字组合或纯字母"
  },
  password: {
    pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/,
    message: "数字和字母组合"
  },
  tel: {
    pattern: /^1\d{10}$/,
    message: "手机号码"
  },
  posInt: {
    pattern: /^[1-9]*[1-9][0-9]*$/,
    message: "请输入正整数"
  },
  email: {
    pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: "邮箱地址"
  },
  url: {
    pattern:
      /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    message: "URL地址"
  },
  idCard: {
    pattern:
      /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    message: "身份证号"
  }
}
