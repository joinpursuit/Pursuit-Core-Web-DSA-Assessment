// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution MUST be **recursive**. Your function must be pure (cannot use global variables)
// 
// Example:
// const arr1 = [5, 2, 9, 11]
// recursiveSum(arr1) should return 27


const recursiveSum = (arr, i = 0) => {
    if( arr.length  <= i ) return 0
    return recursiveSum(arr, i + 1) + arr[i]
}



  

module.exports = recursiveSum