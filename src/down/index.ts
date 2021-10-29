import { downToCsv } from './downToCsv';
import { downToXlsx } from './downToXlsx';
import { downUrl } from './downUrl';

/**
 * @name 下载 类方法
 * @example	
 * downToCsv     // 下载csv文件
 * downToXlsx    // 下载xlsx文件
 * downUrl       // 通过url下载文件
 */
export const CSDown = {
    downToCsv,
    downToXlsx,
    downUrl
};
