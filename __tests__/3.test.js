const sum = require('../3.sumStack')


class Stack {
  constructor() {
    this.arr = []
  }

  isEmpty() {
    return this.arr.length === 0
  }

  push(value) {
    this.arr.push(value)
  }

  pop() {
    return this.arr.pop()
  }

  peek() {
    return this.arr[this.arr.length - 1]
  }

  makeEmpty() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }
}

// Fill stack
let s = new Stack()

describe("3 - Sum of Stack", () => {

  beforeEach(() => {
    s.push(10)
    s.push(12)
    s.push(267)
    s.push(88)
    s.push(91)
    s.push(14)
  })

  test("Returns a valid integer", () => {
    expect(sum(s)).toBeNumber()
  })

  test("Returns the sum", () => {
    expect(sum(s)).toEqual(482)
  })

  afterEach(() => {
    s.makeEmpty()
  })
})