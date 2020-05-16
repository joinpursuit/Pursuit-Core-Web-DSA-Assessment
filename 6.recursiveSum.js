// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution MUST be **recursive**. Your function must be pure (cannot use global variables)
// 
// Example:
// const arr1 = [5, 2, 9, 11]
// recursiveSum(arr1) should return 27


const recursiveSum = (arr) => {
    if(arr.length === 0) return 0;
    while(arr.length){
        let newArr = arr.slice(1)
        return arr[0] + recursiveSum(newArr)
    }
}



module.exports = recursiveSum