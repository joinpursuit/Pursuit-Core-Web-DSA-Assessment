// Q4.
// Write a function `range` that takes in a Queue of numbers
// and returns the range (difference between the minimum and maximum).
//
// Example Queue class:
//
// class Queue {
//   constructor() {
//     this.array = [];
//   }

//   isEmpty() {
//     return this.array.length === 0;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.array[0];
//     }
//   }

//   enqueue(value) {
//     this.array.push(value);
//   }

//   dequeue() {
//     return this.array.shift();
//   }
// }
// let q = new Queue();
// q.enqueue(-145);
// q.enqueue(45);
// q.enqueue(11);
// q.enqueue(98);
//
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here
const range = (queue) => {
  if (queue.isEmpty()) return null;
  let val1 = queue.peek();
  let val2;
  while (!queue.isEmpty()) {
    val2 = queue.dequeue();
  }
  return Math.abs(val1 - val2);
};

module.exports = range;
