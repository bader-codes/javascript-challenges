function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i].toLowerCase() === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

countVowels("javascript"); // 3
countVowels("Hello"); // 2
countVowels("sky"); // 0