function countChar(str) {
    const charCount = {};
    for (const char of str) {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }
    return charCount;
}

console.log(countChar("aabccadeaac"));
