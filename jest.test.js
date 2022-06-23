// Importing jest.js as lib
const lib = require("./jest");

// Test for capitalizing function
test("Capitalizing: 'horse'", () => {
  expect(lib.capitalize("horse")).toMatch("Horse");
});

// Test for reverse string function
test("Reversing: 'cairo'", () => {
  expect(lib.reverseString("cairo")).toMatch("oriac");
});

// Test for calculator object (testing methods)
test("Calculator", () => {
  expect(lib.calculator.add(1, 5)).toBe(6),
    expect(lib.calculator.subtract(6, 9)).toBe(-3),
    expect(lib.calculator.divide(52, 4)).toBe(13),
    expect(lib.calculator.multiply(4, 99)).toBe(396);
});

// Test for caesar cipher function
test("Caesar Cipher", () => {
  expect(lib.caesarCipher("abcdefghijklmnopqrstuvwxyz")).toMatch(
    "bcdefghijklmnopqrstuvwxyza"
  ),
    expect(lib.caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toMatch(
      "BCDEFGHIJKLMNOPQRSTUVWXYZA"
    ),
    expect(lib.caesarCipher("Universe!")).toMatch("Vojwfstf!"),
    expect(lib.caesarCipher("UniVersE!")).toMatch("VojWfstF!"),
    expect(lib.caesarCipher("ThiS tEst WiLl pASS?!!")).toMatch(
      "UijT uFtu XjMm qBTT?!!"
    );
});

// Test for analyzier function
test("Analyzier", () => {
  expect(lib.analyzeArray([1, 6, 9, 2, 5, 2, 4, 1])).toStrictEqual({
    average: 3.75,
    min: 1,
    max: 9,
    length: 8,
  });
});

// All tests have PASSED!
