function checkNumberExists(numbers, target) {
    const isNumberExists = numbers.includes(target);
    return isNumberExists;
}

checkNumberExists([1, 3, 5, 7], 7); // true
checkNumberExists([1, 3, 5, 7], 2); // false