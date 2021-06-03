/**日期-前后天数  
 * addDaysToDate('2020-10-15', 10);   // '2020-10-25'
 * addDaysToDate('2020-10-15', -10);  // '2020-10-05'
 * */
export const addDaysToDate = (date: any = null, n: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d.toISOString().split('T')[0];
};
