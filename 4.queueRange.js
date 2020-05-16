// Q4.
// Write a function `range` that takes in a Queue of numbers
// and returns the range (difference between the minimum and maximum).
//
// Example Queue class:
//
class Queue {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.array[0];
    }
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    return this.array.shift();
  }
}
let q = new Queue([1, 2, 3]);

// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here

const range = (queue) => {
  let tempQ = queue;
  if (!tempQ.peek()) return 0;
  let min = Infinity;
  let max = -Infinity;

  while (!tempQ.isEmpty()) {
    min = Math.min(min, tempQ.peek());
    max = Math.max(min, tempQ.peek());
    tempQ.dequeue();
  }
  return Math.abs(min - max);
};
console.log(range(q));

module.exports = range;
