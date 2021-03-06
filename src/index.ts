export { CSBrowser } from './browser';
export { CSDate } from './date';
export { CSDown } from './down';
export { CSFormat } from './format';
export { CSFunction } from './function';
export { CSLang } from './lang';
export { CSRandom } from './random';
export { CSRegexp } from './regexp';

//浏览器
export { copyToClipboard } from './browser/copyToClipboard';
export { getUrlParam } from './browser/getUrlParam';
export { toUrlEncode } from './browser/toUrlEncode';

//日期
export { addDaysToDate } from './date/addDaysToDate';
export { addMinutesToDate } from './date/addMinutesToDate';
export { dateToTimestamp } from './date/dateToTimestamp';
export { diffTime } from './date/diffTime';
export { timestampToDate } from './date/timestampToDate';
export { timestampToDateNoTime } from './date/timestampToDateNoTime';

//下载
export { downToCsv } from './down/downToCsv';
export { downUrl } from './down/downUrl';


//格式
export { toEnum } from './format/toEnum';
export { toEnumArray } from './format/toEnumArray';
export { toFixed } from './format/toFixed';
export { toString } from './format/toString';

//函数
export { debounce } from './function/debounce';
export { deepClone } from './function/deepClone';
export { throttle } from './function/throttle';

//语法
export { isArray } from './lang/isArray';
export { isBoolean } from './lang/isBoolean';
export { isNil } from './lang/isNil';

// 随机
export { randomBoolean } from './random/randomBoolean';
export { randomNum } from './random/randomNum';

// 正则
export { isAccountName } from './regexp/isAccountName';
export { isEmail } from './regexp/isEmail';
export { isIdCard } from './regexp/isIdCard';
export { isPassword } from './regexp/isPassword';
export { isPhoneNum } from './regexp/isPhoneNum';
export { isUrl } from './regexp/isUrl';