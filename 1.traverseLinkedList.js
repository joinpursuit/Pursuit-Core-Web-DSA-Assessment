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

//create output arr
//reassign list as current
//while current
//push current vals into output
//in the while, reassign current node
//after while loop, return output

function traverse(list) {
    let current = list
    let output = []
    while(current) {
        output.push(current.val)
        current = current.next
    }
return output
}



module.exports = traverse