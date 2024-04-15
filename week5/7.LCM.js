function GCD(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return GCD(b, a % b);
    }
}

function LCM(a, b) {
    return a * b / GCD(a, b);
}

console.log(LCM(5, 61));
