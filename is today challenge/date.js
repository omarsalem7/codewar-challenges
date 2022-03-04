function isToday(date) {
    //Code goes here.
    const today = new Date();
    if (today.getDate() === date.getDate() && today.getFullYear() === date.getFullYear()) return true;
    else return false;
}