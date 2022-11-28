import {
  calculateTax,
  convertKrone,
  formatDecimalSpaces,
  getDiscountPercentage,
} from "./question-3";

describe("getDiscountPercentage", function () {
  test("should calculate discount", function () {
    expect(getDiscountPercentage(100, 75)).toBe(25);
  });

  test("should miscalculate discount", function () {
    expect(getDiscountPercentage(100, 75)).not.toBe(40);
  });
});

describe("formatDecimalSpaces", function () {
  test("should format decimal spaces", function () {
    expect(formatDecimalSpaces(15.5555555)).toBe(15.56);
  });

  test("should misformat decimal spaces", function () {
    expect(formatDecimalSpaces(15.5555555)).not.toBe(40);
  });
});

describe("convertKrone", function () {
  test("should convert krone", function () {
    expect(convertKrone(10)).toBe(101.8);
  });

  test("should not convert krone", function () {
    expect(convertKrone(10)).not.toBe(40);
  });
});

describe("calculateTax", function () {
  test("should calculate tax", function () {
    expect(calculateTax(100)).toBe(125);
  });

  test("should miscalculate tax", function () {
    expect(calculateTax(100)).not.toBe(40);
  });
});
