const chunkArray = require("./chunks");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});
test("functions chunks array length of size's multiple", () => {
  expect.assertions(3);

  expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(chunkArray([1, 2, 3, 4, 5, 6], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  expect(chunkArray([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
});
