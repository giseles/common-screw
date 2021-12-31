// @ts-ignore
import { message } from "antd"
import { LooseObject, MessageType } from "../_interface/LooseObject"
/**
 *
 * @name 统一返回数据提示
 * @param  {Object} data 数据
 * @param  {Number} maxCount 最大显示数 = 1
 * @param  {Number} successCode 成功code码 = 8001
 * @example
 * antdMessage({code:'8001',msg:'成功'})           ---- 成功
 * antdMessage({code:'loading',msg:'加载中'})      ---- 加载中
 * antdMessage({code:'warning',msg:'警告'})        ---- 警告
 * antdMessage({code:'4004',msg:'失败'})           ---- 失败
 */
export const antdMessage = (
  data: LooseObject,
  maxCount: number = 1,
  successCode: number = 8001
) => {
  message.config({
    maxCount
  })
  const list: any = {
    [successCode]: "success",
    loading: "loading",
    info: "info",
    warning: "warning"
  }
  const type: keyof MessageType = list[data.code] || "error"
  message[type](data.msg)
}
