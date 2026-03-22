function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}

sumArray([1, 2, 3, 4]) // 10
sumArray([10, 5]) // 15
sumArray([]) // 0