const caesarCipher = require("../codes/caesarCipher");

test("Caesar Cipher test", () => {
  expect(caesarCipher("do not be late", 2)).toBe("fq pqv dg ncvg");
});
