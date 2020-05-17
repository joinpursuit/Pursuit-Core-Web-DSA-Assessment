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

//   isEmpty() {
//     return this.array.length === 0
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null
//     } else {
//       return this.array[0]
//     }
//   }

//   enqueue(value) {
//     this.array.push(value)
//   }

//   dequeue() {
//     return this.array.shift()
//   }
// }

// let q = new Queue()

// q.enqueue(-145)
// q.enqueue(45)
// q.enqueue(11)
// q.enqueue(98)
    // q.enqueue(-1000)
    // q.enqueue(31000)
    // q.enqueue(2223)
    // q.enqueue(1000)
    // q.enqueue(51235)
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(Math.min(q.dequeue(),q.peek()))
const range = (queue) => {
    let max = 0;
    let min =0;
    let dif = 0;

    while(!queue.isEmpty()){
        let pop = queue.dequeue()
        min = Math.min(pop, queue.peek(), min)
        // queue.enqueue(queue.dequeue())
        // console.log(pop + " pop")
        queue.enqueue(pop)
        max = Math.max(queue.dequeue(), queue.peek(), max)
        
    }

    dif = max - (min)
    return dif
}


// console.log(range(q))

module.exports = range