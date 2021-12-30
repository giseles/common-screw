import { Modal } from "antd"

/**
 * @name 统一返回数据弹窗
 * @param  {object} 数据
 * @example
 * antdConfirm({code:'8001',data:'成功'})     ---- 成功
 * antdConfirm({code:'1111',data:'警告'})     ---- 警告
 * antdConfirm({code:'4004',data:'失败'})     ---- 失败
 */
export const antdConfirm = (data: any) => {
  Modal.error({
    title: data.msg,
    content: data.data
  })
}
