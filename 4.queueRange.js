// Q4.
// Write a function `range` that takes in a Queue of numbers
// and returns the range (difference between the minimum and maximum).
// 
// Example Queue class:
// 
class Queue {
  constructor() {
    this.array = []
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.array[0]
    }
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }
}

// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here

const range = (queue) => {
  //  check if the Queue is empty
  if (queue.isEmpty()) return 0;
  // declare max and min and rage 
  let max = array.peek();
  let min = array.peek();
  let range2Num;
  // while the queue is not empty we loop to find max and min
  // then calculate the range 
  while (!queue.isEmpty()) {
    max = Math.max(max, queue.dequeue());
    min = Math.min(min, queue.dequeue());
    range2Num = max - min
  }
  return range;
}





module.exports = range