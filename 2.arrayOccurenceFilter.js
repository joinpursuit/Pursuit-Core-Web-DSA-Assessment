// Q2.
// Write a function that takes in an array of integers (arr) and a number (n)
// Your function should return an array with only numbers appearing n or more times.
// Your solution MUST work in O(n) time.
//
// Example:
// Input: [1,3,4,1,9,1,3,4,3,1,2], 3
// Output: [1,3]
//
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3) returns [1, 3]
// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) returns [1, 3, 4]

const occurrenceFilter = (arr, n) => {
  let count = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }
  for (let key in count) {
    if (count[key] >= n) {
      result.push(parseInt(key));
    }
  }
  return result;
};

module.exports = occurrenceFilter;
