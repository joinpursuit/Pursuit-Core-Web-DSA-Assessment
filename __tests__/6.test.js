const recursiveSum = require('../6.recursiveSum')

describe("6 - Recursive sum", () => {
  let input = [5,2,9,11]
  let input2 = [25,22,29,211]

  test("Function is written recursively", () => {
    let stringed = recursiveSum.toString()
    let re = new RegExp(/recursiveSum\(/, "gi")
    let matches = stringed.match(re)
    expect(matches.length).toBeGreaterThan(0)
  })

  test("Returns a number", () => {
    expect(recursiveSum(input)).toBeNumber()
  })

  test("Returns the correct answer", () => {
    expect(recursiveSum(input)).toBe(27)
    expect(recursiveSum(input2)).toBe(287)

  })
})