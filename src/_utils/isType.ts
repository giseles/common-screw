export interface ToStringFunc {
  (o: any): boolean;
}

/**
 * @name 判断类型
 * @param type 类型值
 */
const isType: (type: string) => ToStringFunc = (type: string): ToStringFunc => (o: any): boolean =>
  Object.prototype.toString.call(o) === `[object ${type}]`

export default isType