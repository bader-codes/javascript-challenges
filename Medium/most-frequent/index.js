function mostFrequent(array) {
    const count = {};

    for (let i = 0; i < array.length; i++) {
        if (!count[array[i]]) {
            count[array[i]] = 1;
        } else {
            count[array[i]] += 1;
        }
    }

    let maxCount = 0;
    let frequentNumber;

    for (const key in count) {
        if (count[key] > maxCount) {
            maxCount = count[key];
            frequentNumber = key;
        }
    }

    return Number(frequentNumber);
}

const arr = [4, 1, 2, 2, 3, 3, 3, 4, 4, 4];
console.log(mostFrequent(arr)); // 4