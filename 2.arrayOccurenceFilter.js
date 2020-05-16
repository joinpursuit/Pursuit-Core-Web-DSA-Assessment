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
    let count = {}
    let output = []

    for (let int of arr) {
        if (count[int]) {
            count[int] += 1
        } else {
            count[int] = 1
        }
    }
    console.log(count)
    let arr2 = Object.keys(count)
    console.log(arr2)

    arr2.forEach(key => {
        if (count[key] >= n) {
            output.push(Number(key))
        }
    })

    return output
}

console.log(occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3))

module.exports = occurrenceFilter