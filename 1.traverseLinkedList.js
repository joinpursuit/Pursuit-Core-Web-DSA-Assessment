// Q1.
// Given a linked list, write a function to traverse it 
// in order, and store each value in an array
// return an array of values.
// 
// example:
// 
class Node {
  constructor(val) {
    this.next = null
    this.val = val
  }
}

let head = new Node(1); //?? why is head not lighting up//
let next = new Node(2);
let next2 = new Node(3);
let next3 = new Node(4);
let next4 = new Node(5);

let head = next;
let next = next2;
let next2 = next3;
let next3 = next4;


// 
// Imagine a linked list with the structure
// 556 -> 41 -> 33 -> 150 -> 11
// 
// traverse(linkedlist) should return:
// [556, 41, 33, 150, 11]


function traverse(list) {
    if(!node) return [];

}



module.exports = traverse