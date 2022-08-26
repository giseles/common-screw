/**
 * @name 字符串的转义
 * @param {string} 字符串
 * @desc 将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`
 */
export const getEscapeString = (str: string): string => {
  const ESCAPE: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;"
  }
  const ESCAPE_EXPR = /(&|<|>|"|')/g
  return ("" + str).replace(ESCAPE_EXPR, (match) => {
    return ESCAPE[match]
  })
}
