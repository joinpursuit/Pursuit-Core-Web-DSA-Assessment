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


// while there is a curr head, push it's value to created arr
// next one becomes current and you repeat steps

function traverse(list) {
    let current = list;
    let arr = []
    // if(!current) return [];
    // if (current) {
    while(current) {
        arr.push(current.val)
        current = current.next
    }
    // return the arr you pushed the vals into
    return arr;
}



module.exports = traverse