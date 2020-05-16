// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution MUST be **recursive**. Your function must be pure (cannot use global variables)
// 
// Example:
// const arr1 = [5, 2, 9, 11]
// recursiveSum(arr1) should return 27


const recursiveSum = (arr) => {
    let i = 0;
    // if my arr has no length, return 0
    if(i > arr.length) return 0;
    // add the arr[0] to arr[1] to arr[2] to arr[3] 
    // to get from arr[0] to arr[1].. ++ 
    return recursiveSum((arr[i] + 1) + (i + 1))
}
console.log(recursiveSum([5, 2, 9, 11]))

const iterativeSum = (arr) => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(iterativeSum([5, 2, 9, 11]))





console.log(recursiveSum([5, 2, 9, 11]))

module.exports = recursiveSum