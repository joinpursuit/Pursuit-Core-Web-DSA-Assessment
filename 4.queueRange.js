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

//queue first in, first out, like a line
const minNum = (queue) => {
    let min = Infinity;
    if(queue.isEmpty()) return null;
    while(!queue.isEmpty()){
        if(queue.dequeue < min){
            min = queue.dequeue();
        }
    }
    return min
}
const maxNum = (queue) => {
    let max = -Infinity;
    if(queue.isEmpty()) return null;
    while(!queue.isEmpty()){
        if(queue.dequeue() > max){
            max = queue.dequeue();
        }
    }
    return max
}

const range = (queue) => {
    if(queue.isEmpty()) return 0;
    if(queue){
        return Math.abs(maxNum(queue) - minNum(queue))
    }
}




module.exports = range