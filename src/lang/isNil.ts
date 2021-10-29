const isEmptyObject = (obj: any): boolean => {
    if (typeof obj === "object" && Object.keys(obj).length === 0) {
        return true
    }
    return false

}

/**
 * @name 判断类型-是否为空
 * @description  '',null,undefined,{},[]
 * @example
 *  
 *  isNil('')            ---- true
 *  isNil(null)          ---- true
 *  isNil(undefined)     ---- true
 *  isNil({})            ---- true
 *  isNil([])            ---- true
 *  isNil(0)             ---- false
 *  isNil([12,3])        ---- false
 *  
 */
export const isNil = (o: any): boolean => o === null || o === undefined || o === '' || isEmptyObject(o)