// Q9.
// From the following tree https://drive.google.com/uc?id=1WiTdeqPgpQlgCBgSuwRGCcjajAO3JHNw&export=download
// Visit the nodes in alphabetical order and return an array of their values in that order.
// Look in the /assets folder of this repo to see a picture of the tree
// Another text visualization of the tree could be
//            (F)
//       (D)        (J)
//    (B)  (E)   (H)  (K)
//  (A) (C)    (G) (I)
// 
// The tree is already built for you in the test code.
// 
// Example of a tree node:
// class BinaryTreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// 
// f is the root, so therefore
// traverseTreeAlphabetical(f) Should return the array 
// [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" ]

// Implement your code here
const traverseTreeAlphabetical = (node, result = []) => {
    
    const inOrderDfs = (node) => {
        inOrderDfs(node.left)
        result.push(node.val)
        inOrderDfs(node.right)
    }

    inOrderDfs(node)
    return result
}


module.exports = traverseTreeAlphabetical
