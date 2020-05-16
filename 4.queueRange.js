// Q4.
// Write a function `range` that takes in a Queue of numbers
// and returns the range (difference between the minimum and maximum).
// 
// Example Queue class:

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
// 
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here


// variable for range
// grab largest num 
// grab smallest num
// subtract
const range = (queue) => {
    if (queue.isEmpty()) return;
    let min = 0
    let max = 0
    let range = 0
    while (!queue.isEmpty()) {
      max = Math.max(max, queue.dequeue())
      min = Math.min(min, queue.dequeue())
      range = min - max
    }
    return range 
}

console.log(range([-145, 45, 11, 98]))

// let newQ = new Queue


// let range = 0
// let max = 0
// let min = 0

// newQ.enqueue(current)
// while(arr.length > 0) {
//     max = Math.max(max, newQ.dequeue())
//     min = Math.min(min, newQ.dequeue())
// }

// range = max - min
// return range


module.exports = range