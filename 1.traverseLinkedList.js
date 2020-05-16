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
    let result = [];
    let current = list;

    while(current) {
        result.push(current.value);

        current = current.next;        
    }

    return result
}



module.exports = traverse