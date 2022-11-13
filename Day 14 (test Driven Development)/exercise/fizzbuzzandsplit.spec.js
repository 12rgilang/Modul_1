const fizzBuzz = require("./fizzbuzz")

test("Testing FizzBuzz", () => {
    expect(fizzBuzz(10)).toEqual(expect.arrayContaining([1, 2, "fizz", 4, "Buzz"]))
})

