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

class Queue {
    constructor(queue=[]) {
        this.queue = queue
    }
    isEmpty() {
        return this.queue.length === 0
    }
    enqueue(value) {
        this.queue.push(value)
    }
    dequeue() {
    return this.queue.shift()
    }
} 

const queueMin = queue => {
    if(queue.isEmpty()) return null
    let min = Infinity
    let tempQueue = new Queue()

    while(!queue.isEmpty()){
        let node = queue.dequeue()
        min = Math.min(min, node)
        tempQueue.enqueue(node)
    }
    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue())
    }
    return min
}

const queueMax = queue => {
    if(queue.isEmpty()) return null
    let max = -Infinity
    let tempQueue = new Queue()

    while(!queue.isEmpty()){
        let node = queue.dequeue()
        max = Math.max(max, node)
        tempQueue.enqueue(node)
    }
    while(!tempQueue.isEmpty()){
        queue.enqueue(tempQueue.dequeue())
    }
    return max
}


const range = (queue) => queueMax(queue) - queueMin(queue)




module.exports = range