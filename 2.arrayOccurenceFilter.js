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
    let occurrences = {}
    let results = []
    for(el of arr){
        if(occurrences[el]) {
            occurrences[el]++
        } else {
            occurrences[el] = 1
        }
    }
    for(let key in occurrences){
       if(occurrences[key] >= n) {
           results.push(Number(key))
       } 
    }
    return results
}


module.exports = occurrenceFilter