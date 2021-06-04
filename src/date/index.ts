import { addDaysToDate } from './addDaysToDate';
import { dateToTimestamp } from './dateToTimestamp';
import { timestampToDate } from './timestampToDate';
import { timestampToDateNoTime } from './timestampToDateNoTime';


/**
 * @name 日期类方法
 * @example	
 * addDaysToDate           //加前后天数
 * dateToTimestamp         //日期转时间戳
 * timestampToDate         //时间戳转日期
 * timestampToDateNoTime   //时间戳转日期 无时间  
 * 
 */
export const CSDate = {
    addDaysToDate,
    dateToTimestamp,
    timestampToDate,
    timestampToDateNoTime,
}
