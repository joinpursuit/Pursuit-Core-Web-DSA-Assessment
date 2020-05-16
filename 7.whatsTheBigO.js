// Q7.
// What is the runtime of the following code? Explain your reasoning.
// Answer on canvas

const foo = (arr) => {
  arr.forEach(x => { // o(n)
    print(x) 
  })
}

// foo time complexity is linear because we iterating through an array

const bar = (arr) => {
  arr.forEach(() => { // o(n)
    foo(arr)// call back function o(n)
  })//==> o(n) * o(n) = o(n^2)
  arr.forEach(() => { // o(n)
    foo(arr)// o(n)
  })// ===> o(n^2)
}
//==> o(n^2) + o(n^2) = 2*O(n^2)==>
// O(n ^ 2)
//  bar time complexity is quadratic because is nested loop O(n^2)
