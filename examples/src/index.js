import {
    CSDate, addDaysToDate, timestampToDateNoTime, timestampToDate
} from '../../dist'
// import {
//     addDaysToDate, timestampToDateNoTime
// } from '../../dist/date'
// import Screw from '../../src'
console.log(CSDate)
console.log(CSDate.timestampToDateNoTime())
console.log(timestampToDate(1622711246300))
console.log(timestampToDateNoTime(1624711246300))
console.log(addDaysToDate('2020-10-15', 10))