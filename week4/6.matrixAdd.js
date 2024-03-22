function matrixAdd(a, b) {
    let sum = [];
    for (let i = 0; i < 2; i++) {
        sum[i] = [];
        for (let j = 0; j < 2; j++) {
            if (!a[i][j]) {
                a[i][j] = 0;
            }
            if (!b[i][j]) {
                b[i][j] = 0;
            }
            sum[i][j] = a[i][j] + b[i][j];
        }
    }
    return sum;
}

console.log(matrixAdd([[100], [300, 400]], [[-400, -300], [-100]]));
