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


// i want to get the tally of each number 
// so i want to loop thru the entire arr
// if a number is there (ex. 3 times) then push that number to the new arr
// bank / store for count 
const occurrenceFilter = (arr, n) => {
    let count = [];
    for(let i = 0; i < arr.length; i++) {
        let n =

    }



}



// if(my arr has no length) {
//     return []
// } else {
//     iterate thru the arr and increment count of number in bank if its already there 
//     then when you fin going thru loop, check bank
//     whichever num in bank that is >= 3, push to that new arr
// }
module.exports = occurrenceFilter