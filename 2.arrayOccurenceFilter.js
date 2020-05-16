// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution MUST work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]
// 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3) returns [1, 3] 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) returns [1, 3, 4] 

const occurrenceFilter = (arr, n) => {
    let output = []
    let counter = {}
    for(let i = 0; i < arr.length; i++){
        if(counter[arr[i]]){
            counter[arr[i]] += 1
        } else {
            counter[arr[i]] = 1
        }
    }
    for(key in counter){
        if(counter[key] >= n){
            output.push(Number(key))
        }
    }
    return output
}

module.exports = occurrenceFilter