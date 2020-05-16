// Q4.
// Write a function `range` that takes in a Queue of numbers
// and returns the range (difference between the minimum and maximum).
//
// Example Queue class:
//
// class Queue {
//   constructor() {
//     this.array = []
//   }
//
//   isEmpty() {
//     return this.array.length === 0
//   }
//
//   peek() {
//     if (this.isEmpty()) {
//       return null
//     } else {
//       return this.array[0]
//     }
//   }
//
//   enqueue(value) {
//     this.array.push(value)
//   }
//
//   dequeue() {
//     return this.array.shift()
//   }
// }
//
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here

//if empty, return
//set diff variable
//set max and min
//while stack is not empty
//get max
//get min
//subtract max and min to find diff
//return diff
const range = (queue) => {
  if (queue.isEmpty()) return;
  let difference = 0;
  let max = queue.peek();
  let min = 0
  while (!queue.isEmpty()) {
    max = Math.max(max, queue.dequeue());
    min = Math.min(min, queue.dequeue());
    // console.log(max, "max")
    // console.log(min, "min")
    difference = max - min;
  }
  return difference;
};

module.exports = range;
