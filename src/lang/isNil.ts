const isNotEmptyObject = (obj: any): boolean => {
    if (typeof obj === "object") {
        if (Object.keys(obj).length > 0) {
            return true;
        }
    }
    return false;
}

/**
 * @name 判断类型-是否为空
 * @example
 *  isNil('')            ---- false
 *  isNil(null)          ---- true
 *  isNil(undefined)     ---- true
 *  isNil({})            ---- true
 */
export const isNil = (o: any): boolean => o === null || o === undefined || o === '' || isNotEmptyObject(o)