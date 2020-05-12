const printTreeAphabeticalOrder = require('../9.printTreeAphabeticalOrder')

class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create nodes
let a = new BinaryTreeNode("A");
let b = new BinaryTreeNode("B");
let c = new BinaryTreeNode("C");
let d = new BinaryTreeNode("D");
let e = new BinaryTreeNode("E");
let f = new BinaryTreeNode("F");
let g = new BinaryTreeNode("G");
let h = new BinaryTreeNode("H");
let i = new BinaryTreeNode("I");
let j = new BinaryTreeNode("J");
let k = new BinaryTreeNode("K");


let a2 = new BinaryTreeNode("A");
let b2 = new BinaryTreeNode("B");
let c2 = new BinaryTreeNode("C");
let d2 = new BinaryTreeNode("D");
let e2 = new BinaryTreeNode("E");
let f2 = new BinaryTreeNode("F");
let g2 = new BinaryTreeNode("G");
let h2 = new BinaryTreeNode("H");
let i2 = new BinaryTreeNode("I");
let j2 = new BinaryTreeNode("J");


// Connect nodes, thus creating the Tree
f.left = d;
f.right = j;

d.left = b;
d.right = e;

b.left = a;
b.right = c;

j.left = h;
j.right = k;

h.left = g;
h.right = i;

// 
f2.left = d2
f2.right = j2

d2.left = b2
d2.right = e2

b2.left = a2
b2.right = c2

j2.left = h2

h2.left = g2
h2.right= i2


describe("9 - Inorder tree traversal", () => {
  const result = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ]
  const result2 = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ]
  
  test("Returns an array", () => {
    expect(printTreeAphabeticalOrder(f)).toBeArray()
  })

  test("Returns the right answer", () => {
    expect(printTreeAphabeticalOrder(f)).toEqual(result)
    expect(printTreeAphabeticalOrder(f2)).toEqual(result2)
  })
})