const cheackLeapYear = n => {
    if ((n % 4 == 0) && (n % 100 !== 0 || n % 400 == 0)) {
        return (n + " Is A Leap Year");
    } else {
        return (n + " Is Not A Leap Year");
    }
}
var leapYear = cheackLeapYear(2022);
console.log(leapYear);