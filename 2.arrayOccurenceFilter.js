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
   const occurence = (arr)=>{
       let object = {}
       for(num of arr){
           if(object[num]){
               object[num]++
           }else{
               object[num] = 1
           }
       }
       return object
   }
   let count = occurence(arr)
   let output = []
   for(key in count){
       if(count[key] >= n) output.push(Number(key))
   }
   return output
}

module.exports = occurrenceFilter