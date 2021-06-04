export { CSDate } from './date';
export { default as CSDown } from './down';
export { default as CSFormat } from './format';
export { default as CSLang } from './lang';
export { default as CSRandom } from './random';

//日期
export { addDaysToDate } from './date/addDaysToDate';
export { dateToTimestamp } from './date/dateToTimestamp';
export { timestampToDate } from './date/timestampToDate';
export { timestampToDateNoTime } from './date/timestampToDateNoTime';

//下载
export { downFile } from './down/downFile';
export { downUrl } from './down/downUrl';


//格式
export { toFixed } from './format/toFixed';
export { toJson } from './format/toJson';
export { toString } from './format/toString';

//语法
export { isArray } from './lang/isArray';
export { isBoolean } from './lang/isBoolean';
export { isNil } from './lang/isNil';