function arrayMin(a) {
    let min = a[0];
    for (let i in a) {
        if (min > a[i]) {
            min = a[i];
        }
    }
    return min;
}

console.log(arrayMin([0, 20, -100, 900, 50]));
