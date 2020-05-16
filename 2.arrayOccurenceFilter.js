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

  const occMap = (arr) => {
    let results = {}
    for (num of arr){
      results[num] ? results[num]++ : results[num] = 1
    }
    return results
  }

  let occurrences = occMap(arr)
  let answer = []
  
  for (key in occurrences) {
    if (occurrences[key] >= n) answer.push(Number(key))
  }
  return answer
}

module.exports = occurrenceFilter