const occurrenceFilter = require("../2.arrayOccurenceFilter")

describe("2 - Array Occurrence filter", () => {
  test("Returns an array", () => {
    expect(occurrenceFilter([1,2,3,4])).toBeArray()
  })

  test("Returns the right answer", () => {
    expect(
      occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 3)
    ).toIncludeAllMembers([1, 3])
    expect(
      occurrenceFilter([1, 3, 4, 1, 9, 1, 3, 4, 3, 1, 2], 2)
    ).toIncludeAllMembers([1, 3, 4])
    expect(occurrenceFilter([8, 8, 8, 8, 5, 3, 1], 2)).toIncludeAllMembers([8])
  })
})
