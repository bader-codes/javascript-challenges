function firstNonRepeatingCharacter(str) {
    let myObject = {};

    for (let i = 0; i < str.length; i++) {
        myObject[str[i]] = (myObject[str[i]] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        if (myObject[str[i]] === 1) return str[i];
    }

    return null;
}

console.log(firstNonRepeatingCharacter('Bader')); // B
console.log(firstNonRepeatingCharacter('JavaScript')); // J