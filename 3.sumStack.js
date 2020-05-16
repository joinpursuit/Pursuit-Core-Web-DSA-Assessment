// Q3.
// Write a function `sum` that takes a Stack of numbers as input
// and returns the sum of all elements.
//
// Example Stack class:
//
class Stack {
  constructor() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}
//
let s = new Stack();
s.push(10);
s.push(12);
s.push(267);
s.push(88);
s.push(91);
s.push(14);
// stack contains: 10, 12, 267, 88, 91, 14
//
// sum(s) // should return 482

// Implement your function here
const sum = (stack, total = 0) => {
  if (stack.isEmpty()) return total;
  while (!stack.isEmpty()) {
    total += stack.pop();
  }
  return sum(stack, total);
};
console.log(sum(s));

module.exports = sum;
