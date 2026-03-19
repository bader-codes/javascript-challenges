function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

isPalindrome("madam") // true
isPalindrome("racecar") // true
isPalindrome("hello") // false
isPalindrome("Race Car") // true