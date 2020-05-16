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

//
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243
let q = new Queue();
q.enqueue(-145);
q.enqueue(45);
q.enqueue(11);
q.enqueue(98);

const findMaxAndMin = (queue) => {
  if (queue.isEmpty()) return 0;
  let max = queue.peek();
  let min = queue.peek();
  while (!queue.isEmpty()) {
    max = Math.max(max, queue.peek());
    min = Math.min(min, queue.peek());
    queue.dequeue();
  }
  return [max, min];
};
// console.log("max and min: ", findMaxAndMin(q));

// Write your function here
const range = (queue) => {
  let res = findMaxAndMin(queue);
  return res[0] - res[1];
};

module.exports = range;
