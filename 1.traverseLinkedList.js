// Q1.
// Given a linked list, write a function to traverse it
// in order, and store each value in an array
// return an array of values.
//
// example:
//
// class Node {
//   constructor(val) {
//     this.next = null
//     this.val = val
//   }
// }
//
// Imagine a linked list with the structure
// 556 -> 41 -> 33 -> 150 -> 11
//
// traverse(linkedlist) should return:
// [556, 41, 33, 150, 11]

function traverse(list) {
  if (!list) return [];
  let curr = list;
  let output = [];

  while (curr) {
    output.push(curr.val);
    curr = curr.next;
  }
  return output;
}

module.exports = traverse;
