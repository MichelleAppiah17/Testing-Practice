const analyzeArray = require("../codes/analyzeArray");

test("Array analysis", () => {
  expect(analyzeArray([2, 5, 9, 15, 26, 3, 7])).toEqual({
    average: 10,
    min: 2,
    max: 26,
    length: 7,
  });
});