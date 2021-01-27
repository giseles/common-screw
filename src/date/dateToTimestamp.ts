export const dateToTimestamp = (date: any = null) => {
    let newDate;
    if (date) {
        newDate = new Date(date)
    } else {
        newDate = new Date()
    }
    return Math.floor(newDate.getTime() / 1000)
}