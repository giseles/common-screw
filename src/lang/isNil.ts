isNotEmptyObject = (obj: any): boolean => {
    if (typeof obj === "object") {
        if (Object.keys(obj).length > 0) {
            return true;
        }
    }
    return false;
}

export const isNil = (o: any): boolean => o === null || o === undefined || o === '' || isNotEmptyObject(o)