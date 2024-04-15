function GCD(a, b) {
    if (a % b === 0) {
        return b;
    } else {
        return GCD(b, a % b);
    }
}

console.log(GCD(4, 21));
