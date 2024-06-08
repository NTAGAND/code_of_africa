function hasSubarrayWithSum(arr, target) {
    const cumulativeSumMap = new Map();
    let cumulativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];

        // Check if cumulative sum equals target
        if (cumulativeSum === target) {
            return true;
        }

        // Check if (cumulative sum - target) exists in the map
        if (cumulativeSumMap.has(cumulativeSum - target)) {
            return true;
        }

        // Store the cumulative sum in the map if not already present
        if (!cumulativeSumMap.has(cumulativeSum)) {
            cumulativeSumMap.set(cumulativeSum, i);
        }
    }

    return false;
}

// Example usage:
const arr1 = [4, 2, 7, 1, 9, 5];
const target1 = 17;
console.log(hasSubarrayWithSum(arr1, target1));  // Output: true

const arr2 = [1, 2, 3, 4, 5];
const target2 = 9;
console.log(hasSubarrayWithSum(arr2, target2));  // Output: true

const arr3 = [1, -1, 5, -2, 3];
const target3 = 3;
console.log(hasSubarrayWithSum(arr3, target3));  // Output: true

const arr4 = [-2, -1, 2, 1];
const target4 = 1;
console.log(hasSubarrayWithSum(arr4, target4));  // Output: true

const arr5 = [1, 2, 3];
const target5 = 7;
console.log(hasSubarrayWithSum(arr5, target5));  // Output: false
