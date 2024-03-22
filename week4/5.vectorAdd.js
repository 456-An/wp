function vectorAdd(a, b) {
    let sum = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        sum[i] = a[i] + b[i];
    }
    return sum;
}

console.log(vectorAdd([100, -200], [-300, 400]));
