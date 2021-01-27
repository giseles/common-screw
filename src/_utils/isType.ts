export interface ToStringFunc {
    (o: any): boolean;
  }
  
  const isType: (type: string) => ToStringFunc = (type: string): ToStringFunc => (o: any): boolean =>
    Object.prototype.toString.call(o) === `[object ${type}]`
  
  export default isType