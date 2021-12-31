// @ts-ignore
import { Modal } from "antd"
import { LooseObject, ModalType } from "../_interface/LooseObject"

/**
 * @name 统一返回信息提示框
 * @param  {Object} data 数据
 * @param  {Object} type 类型 = "error"
 * @example
 * antdConfirm({msg:'success',data:'成功'})     ---- 成功
 * antdConfirm({msg:'info',data:'信息'})        ---- 信息
 * antdConfirm({msg:'warning',data:'警告'})     ---- 警告
 * antdConfirm({msg:'error',data:'失败'})       ---- 失败
 */

export const antdConfirm = (
  data: LooseObject,
  type: keyof ModalType = "error"
) => {
  Modal[type]({
    title: data.msg,
    content: data.data
  })
}
