/**
 * @name 字符串的反转义
 * @param {string} 字符串
 * @desc  将`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号
 */
export const getUnEscapeString = (str: string): string => {
  const UN_ESCAPE: any = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'"
  }
  const UN_ESCAPE_EXPR = /(&amp;|&lt;|&gt;|&quot;|&#x27;)/g
  return ("" + str).replace(UN_ESCAPE_EXPR, (match) => {
    return UN_ESCAPE[match]
  })
}
