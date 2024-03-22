function daysInYear(n) {
    if ((n % 4 === 0 && n % 100 !== 0)|| n % 400 === 0) {
        return 366;
    }
    return 365;
}

console.log(daysInYear(2004));
