
const traverse = require('../1.traverseLinkedList')


class Node {
  constructor(val) {
    this.next = null
    this.val = val
  }
}

// Create nodes
let n1 = new Node(556)
let n2 = new Node(41)
let n3 = new Node(33)
let n4 = new Node(150)
let n5 = new Node(11)

// Connect nodes, in turn creating the list
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

let l1 = new Node(112)
let l2 = new Node(889)
let l3 = new Node(1237)
let l4 = new Node(445)
let l5 = new Node(8888)
let l6 = new Node(109423823)

l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
l5.next = l6

describe("1 - Traverse linked list", () => {
  test("returns an array", () => {
    expect(traverse(n1)).toBeArray()
  })

  test("returns the correct answer", () => {
    expect(traverse(n1)).toEqual([556, 41, 33, 150, 11])
    expect(traverse(l1)).toEqual([112, 889, 1237, 445, 8888, 109423823])
  })
  
})