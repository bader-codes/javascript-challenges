function findMaxNum(arr) {
    if (arr.length === 0) return null;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([3, 7, 2, 9, 5]));
console.log(findMax([1, 2, 3, 4, 10]));
console.log(findMax([3, 7, 2, 9, 5]));
console.log(findMax([1, 2, 3, 4, 10]));