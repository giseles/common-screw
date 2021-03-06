import { toEnum } from './toEnum';
import { toEnumArray } from './toEnumArray';
import { toFixed } from './toFixed';
import { toString } from './toString';


/**
 * @name 格式 类方法
 * @example	
 * toEnum         //将数组 => 对象格式
 * toEnumArray    //将对象 => 数组格式
 * toFixed        //保留小数点（非四舍五入）
 * toString       //字符串转换
 */
export const CSFormat = {
    toEnum,
    toEnumArray,
    toFixed,
    toString
};
