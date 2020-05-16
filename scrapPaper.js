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
      console.log(count[key], "count at key");
      output.push(parseInt(key));
      console.log(key, "key");
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
  return arr.pop() + recursiveSum(arr)

}
// console.log(recursiveSum([5, 2, 9, 11]));


class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // let a = new TreeNode("A");
  // let b = new TreeNode("B");
  // let c = new TreeNode("C");
  // let d = new TreeNode("D");
  // let e = new TreeNode("E");
  // let f = new TreeNode("F");
  // let g = new TreeNode("G");
  // let h = new TreeNode("H");
  // let i = new TreeNode("I");
  // let j = new TreeNode("J");
  // let k = new TreeNode("K");
  
  let a = new TreeNode(10);
  let b = new TreeNode(5);
  let c = new TreeNode(3);
  let d = new TreeNode(2);
  let e = new TreeNode(6);
  let f = new TreeNode(1);
  let g = new TreeNode(9);
  let h = new TreeNode(4);
  let i = new TreeNode(2);
  let j = new TreeNode(3);
  let k = new TreeNode(0);
  
  
  a.left = b;
  a.right = g;
  
  b.left = c;
  b.right = f;
  
  c.left = d;
  c.right = e;
  
  g.left = h;
  g.right = k;
  
  h.left = i;
  h.right = j;

  const dfsInorder = root => {
      if (!root) return null
      let node = [root]
      let output = []
     while(node.length) {
         let current = node.shift()
         output.push(current.val)
         if (current.left) node.push(current.left)
         if (current.right) node.push(current.right)
     }
     return output
  }
console.log(dfsInorder(a))