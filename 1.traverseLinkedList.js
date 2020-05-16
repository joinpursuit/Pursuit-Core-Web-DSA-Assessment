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

// let head = new Node(1); //?? why is head not lighting up //
// let next = new Node(2);
// let next2 = new Node(3);
// let next3 = new Node(4);
// let next4 = new Node(5);

// let head = next;
// let next = next2;
// let next2 = next3;
// let next3 = next4;


// 
// Imagine a linked list with the structure
// 556 -> 41 -> 33 -> 150 -> 11
// 
// traverse(linkedlist) should return:
// [556, 41, 33, 150, 11]


// if there is no node to start off with, return null or []
// if there is a node, save it to the arr 
// then keep going thru the nodes and saving them
// oh need to set curr vari 

function traverse(list) {
    let current = list;
    if(!list) return [];
    if (list) {
        arr.push(current.value)
        // push it into the arr //(the actual value)
        // then go to the next node and push that in //value // new head becomes current
        current = current.next
    }
    // return the arr you pushed the vals into
    return arr;
}



module.exports = traverse