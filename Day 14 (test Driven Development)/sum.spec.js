const {Sum, Validate} = require("./sum")

test("Testing Sum Function-1", () => {
    expect(Sum(5, 5)).toBe(10)
})

test("Testing Sum Function-2", () => {
    expect(Sum(5, 5)).toBe(10)
})

test("Testing Sum Function-1", () => {
    expect(Validate("ryan.fandy@gmail.com")).toBe(true)
})

test("Testing Sum Function-2", () => {
    expect(Validate("ryanfandygmail.com")).toBe(false)
})