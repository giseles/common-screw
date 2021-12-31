import { isAccountName } from "./isAccountName"
import { isEmail } from "./isEmail"
import { isIdCard } from "./isIdCard"
import { isPassword } from "./isPassword"
import { isPhoneNum } from "./isPhoneNum"
import { isUrl } from "./isUrl"

/**
 * @name 正则 类方法
 * @example
 * isAccountName    //判断是否为用户名
 * isEmail          //判断是否为邮箱地址
 * isIdCard         //判断是否为身份证号
 * isPassword       //判断是否为密码
 * isPhoneNum       //判断是否为手机号
 * isUrl            //判断是否为URL地址
 */
export const CSRegexp = {
  isAccountName,
  isEmail,
  isIdCard,
  isPassword,
  isPhoneNum,
  isUrl
}
