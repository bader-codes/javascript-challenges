function countEvens(numbers) {
    let count = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) count += 1;
    }

    return count;
}

countEvens([1, 2, 3, 4, 5, 6]); // 3
countEvens([2, 4, 6, 8]); // 4
countEvens([7, 9, 11]); // 0