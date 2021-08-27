interface itemObj {
    data: any;
    expire: number;
}

/**
* @name 改造localStorage，可设置过期时间
* @param {String} key 字段 
* @param {Any} value 值 
* @param {Number} expire 过期时间 
* @example
*  storage.setItem(key,1)
*  storage.getItem(key)
*  storage.removeItem(key)
*/
export const storage = {
    setItem: (key: string, value: any, expire = 7 * 24 * 60 * 60) => {
        localStorage.setItem(key, JSON.stringify({ data: value, expire: +new Date() + expire * 1000 }));
    },

    getItem: (key: string) => {
        const val = localStorage.getItem(key);
        if (!val) {
            return val;
        }
        const obj: itemObj = JSON.parse(val);
        if (new Date().getTime() > obj.expire) {
            storage.removeItem(key);
            return null;
        } else {
            return obj.data;
        }
    },

    removeItem: (key: string) => {
        localStorage.removeItem(key);
    },
};

