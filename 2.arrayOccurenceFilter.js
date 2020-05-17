// Q2. 
// Write a function that takes in an array of integers (arr) and a number (n)
// You function should return an array with only numbers appearing n or more times. 
// Your solution MUST work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]
// 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3)  returns [1, 3] 
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) returns [1, 3, 4] 

const occurrenceFilter = (arr, n) => {
   
    let filter = {}
    let filterVal = []
    arr.forEach(el => {
        if(filter[el]){
            filter[el] += 1
        } else {
            filter[el] = 1
        }
    });

    for(let key in filter){
        if(filter[key] >= n){
            filterVal.push(Number(key))
        }
    }
    
    return filterVal
}

occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) 

module.exports = occurrenceFilter