// Q3.
// Write a function `sum` that takes a Stack of numbers as input
// and returns the sum of all elements.
// 
// Example Stack class:
// 
// class Stack {
//   constructor() {
//     this.arr = []
//   }
// 
//   isEmpty() {
//     return this.arr.length === 0
//   }
// 
//   push(value) {
//     this.arr.push(value)
//   }
// 
//   pop() {
//     return this.arr.pop()
//   }
// 
//   peek() {
//     return this.arr[this.arr.length - 1]
//   }
// }
// 
// let s = new Stack()
// stack contains: 10, 12, 267, 88, 91, 14
//
// sum(s) // should return 482

// Implement your function here
const sum = (stack) => stack.isEmpty() ? 0 : stack.pop() + sum(stack)

module.exports = sum