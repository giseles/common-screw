import downDate from "../_utils/downDate"

/**
 * @name 下载csv文件
 * @param {Any} data 文件内容
 * @param {String} name 文件名
 * @param {Boolean} time 是否需要日期 = true
 * @example
 * downToCsv(data,'文件名')
 */
export const downToCsv = (data: any, name: string, time: boolean = true) => {
  let fileName = time ? name + " " + downDate() : name
  const blob = new Blob(["\ufeff" + data], { type: "text/csv" })
  // @ts-ignore
  if (navigator.msSaveBlob) {
    // @ts-ignore
    navigator.msSaveBlob(blob, fileName)
  } else {
    const a = document.createElement("a")
    a.href = window.URL.createObjectURL(blob)
    a.download = fileName + ".csv"
    a.click()
  }
}
