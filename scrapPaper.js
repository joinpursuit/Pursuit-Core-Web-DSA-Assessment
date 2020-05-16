//this is my scrap paper to work out functions


// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2) 
// returns [1, 3, 4]

const occurrenceFilter = (arr, n) => {
  let count = {};
  arr.forEach((el) => {
    if (count[el]) {
      count[el]++;
    } else {
      count[el] = 1;
    }
  });
  // return count
  console.log(count)
  let output = [];
  for (let key in count) {
    if (count[key] === n) {
        console.log(count[key], "count at key")
      output.push(parseInt(key));
      console.log(key, "key")
    }
  }
  return output;
};
// console.log(occurrenceFilter([1, 3, 4, 9, 1, 3, 4, 3, 1, 2], 3))

const recursiveSum = (arr) => {
    if (arr.length <= 0) return 0;
  //   if (arr >= arr.length) return 0;
  //   if (arr.length === 1) return arr[0];
   
    return arr.shift() + recursiveSum(arr);
  };

  console.log(recursiveSum([5, 2, 9, 11]))