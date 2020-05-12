const range = require('../4.queueRange')

class Queue {
  constructor() {
    this.array = []
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    } else {
      return this.array[0]
    }
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }

  makeEmpty() {
    while(!this.isEmpty()){
      this.dequeue()
    }
  }
} 

// Fill up the queue
let q = new Queue()
let q2 = new Queue()

describe("4 - Range of a queue", () => {
  beforeEach(() => {
    q.enqueue(-145)
    q.enqueue(45)
    q.enqueue(11)
    q.enqueue(98) 

    q2.enqueue(-1000)
    q2.enqueue(31000)
    q2.enqueue(2223)
    q2.enqueue(1000)
    q2.enqueue(51235)
  })

  test("Returns a number", () => {
    expect(range(q)).toBeNumber()
    expect(range(q2)).toBeNumber()
  })

  test("Returns the right number", () => {
    expect(range(q)).toBe(243)
    expect(range(q2)).toBe(52235)
  })

  afterEach(() => {
    q.makeEmpty()
    q2.makeEmpty()
  })
})