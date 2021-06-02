export interface ToStringFunc {
  (o: any): boolean;
}


/** 判断类型 */
const isType: (type: string) => ToStringFunc = (type: string): ToStringFunc => (o: any): boolean =>
  Object.prototype.toString.call(o) === `[object ${type}]`

export default isType