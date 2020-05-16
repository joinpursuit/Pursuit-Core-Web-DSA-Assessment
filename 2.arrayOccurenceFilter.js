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
  if (!arr.length) return null;
  let countOccur = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    countOccur[char] ? (countOccur[char] += 1) : (countOccur[char] = 1);
  }
  for (let key in countOccur) {
    if (countOccur[key] >= n) {
      output.push(Number(key));
    }
  }
  return output;
};

module.exports = occurrenceFilter;
