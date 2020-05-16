// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution MUST be **recursive**. Your function must be pure (cannot use global variables)
// 
// Example:
// const arr1 = [5, 2, 9, 11]
// recursiveSum(arr1) should return 27


const recursiveSum = (arr) => {
    //implement i and update it recursively
    let array = arr
    if(array.length <= 1) return array[0]
    let i = array.length - 1
    array.pop()
    return array[i] + recursiveSum(array)
}



module.exports = recursiveSum