const reverseString = require("./reverseString");

test("reverse function exists", () => {
  expect(reverseString).toBeDefined();
});

test("string reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
