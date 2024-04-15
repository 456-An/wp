function filter(a, f) {
    let result = [];

    for (let i of a) {
        if (f(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log("odd number :", filter([2, 5, 8, 13, 17], function (x) {return x % 2 === 1;}));
