import downDate from "../_utils/downDate"

/**
 * @name 下载xlsx文件
 * @param {Any} data 文件内容
 * @param {String} name 文件名
 * @param {Boolean} time 是否需要日期 = true
 * @example
 * downToXlsx(data,'文件名')
 */
export const downToXlsx = (data: any, name: string, time: boolean = true) => {
  const fileName = time ? name + " " + downDate() : name
  let blob = new Blob([data], { type: "application/vnd.ms-excel" })
  const a = document.createElement("a")
  a.style.display = "none"
  a.href = window.URL.createObjectURL(blob)
  a.setAttribute("download", decodeURI(fileName + ".xlsx"))
  a.click()
}
