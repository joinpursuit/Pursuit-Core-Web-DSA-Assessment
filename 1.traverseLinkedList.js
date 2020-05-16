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
  
  // let head = new Node(556)
  // let two = new Node(41)
  // let three = new Node(33)
  // let four = new Node(150)
  // let five = new Node(11)
  
  // head.next = two
  // two.next = three
  // three.next = four
  // four.next = five
  // 
  // Imagine a linked list with the structure
  // 556 -> 41 -> 33 -> 150 -> 11
  // 
  // traverse(linkedlist) should return:
  // [556, 41, 33, 150, 11]
  
  
  function traverse(list) {
      let output = [];
      let pointer = list
      while(pointer !== null){
          output.push(pointer.val)
          pointer = pointer.next
      }
      return output
  }
  
  // console.log(traverse(head))
  
  module.exports = traverse