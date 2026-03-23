function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // prefix
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // suffix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([6, 5, 9, 2])); // Output: [90, 108, 60, 270]

