function leapYears(year) {
    // find ud af hvad der er et leapYear.
    // divisible by four
    if (year % 100 === 0) {
        // not leapyear - unless
        if(year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else if ((year % 4 === 0)) {
        return true; 
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
