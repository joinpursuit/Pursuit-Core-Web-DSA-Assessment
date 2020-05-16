//this is my scrap paper to work out functions

// occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2)
// returns [1, 3, 4]

const occurrenceFilter = (arr, n) => {
  let count = {};
  arr.forEach((el) => {
    if (count[el]) {
      count[el]++;
    } else {
      count[el] = 1;
    }
  });
  // return count
  console.log(count);
  let output = [];
  for (let key in count) {
    if (count[key] === n) {
      //   console.log(count[key], "count at key");
      output.push(parseInt(key));
      //   console.log(key, "key");
    }
  }
  return output;
};
// console.log(occurrenceFilter([1, 3, 4, 9, 1, 3, 4, 3, 1, 2], 3))

const recursiveSum = (arr) => {
  if (arr.length <= 0) return 0;
  //   if (arr >= arr.length) return 0;
  //   if (arr.length === 1) return arr[0];

  // console.log(arr.pop(), "pop")
  return arr.pop() + recursiveSum(arr);
  //whyyyyy correct here but not there?????
};
// console.log(recursiveSum([5, 2, 9, 11]));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode("A");
let b = new TreeNode("B");
let c = new TreeNode("C");
let d = new TreeNode("D");
let e = new TreeNode("E");
let f = new TreeNode("F");
let g = new TreeNode("G");
let h = new TreeNode("H");
let i = new TreeNode("I");
let j = new TreeNode("J");
let k = new TreeNode("K");
// (F)
//       (D)        (J)
//    (B)  (E)   (H)  (K)
// (A) (C)     (G) (I)
//
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

const dfsInorder = (root) => {
  if (!root) return null;
  let node = [root];
  let output = [];
  while (node.length) {
    let current = node.shift();
    output.push(current.val);
    if (current.left) node.push(current.left);
    if (current.right) node.push(current.right);
  }
  return output;
};
// console.log(dfsInorder(f))

class Queue {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.array[0];
    }
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    return this.array.shift();
  }
}
const range = (queue) => {
  console.log(queue);
  if (queue.isEmpty()) return 0;
  let q = new Queue()
  let difference = 0;
  // let max = 0;
  // let min = 0
  while (!q.isEmpty()) {
    console.log(q);
    let max = Math.max(max, q.dequeue());
    console.log(max);
    //
    let min = Math.min(min, q.dequeue());
    // console.log(max, "max")
    // console.log(min, "min")
    difference = max - min;
  }
  return difference;
};
let q = new Queue([-145, 45, 11, 98]);
console.log(q)
console.log(range(q));
// Imagine the queue contains -145, 45, 11, 98
// range(q) should return 243

// Write your function here

// if empty, return
// set diff variable
// set max and min
// while stack is not empty
// get max
// get min
// subtract max and min to find diff
