import { message } from "antd"
/**
 *
 * @name 统一返回数据提示
 * @param  {object} 数据
 * @example
 * antdMessage({code:'8001',data:'成功'})     ---- 成功
 * antdMessage({code:'1111',data:'警告'})     ---- 警告
 * antdMessage({code:'4004',data:'失败'})     ---- 失败
 */

export const antdMessage = (data: any) => {
  message.config({
    maxCount: 1
  })
  if (data.code === "8001") {
    message.success(`${data.msg}`)
  } else if (data.code === "1111") {
    message.loading(`${data.msg}`)
  } else {
    message.error(`${data.msg}`)
  }
}
