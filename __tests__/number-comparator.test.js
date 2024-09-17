import { isSimilar } from "../dist/bundle.min.js";
import { expect, jest, test } from "@jest/globals";

describe("Number Tests", function () {
  test("Number equal test", () => {
    let a = 10;
    let b = 10;
    expect(isSimilar(a, b)).toBe(true);
  });

  test("Number not equal test", () => {
    let a = 10;
    let b = 100;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Negative number equal test", () => {
    let a = -10;
    let b = -10;
    expect(isSimilar(a, b)).toBe(true);
  });

  test("Negative number not equal test", () => {
    let a = -10;
    let b = -20;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Negative positive number not equal test", () => {
    let a = -10;
    let b = 10;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Positive negative number not equal test", () => {
    let a = 10;
    let b = -10;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Zero number equal test", () => {
    let a = 0;
    let b = 0;
    expect(isSimilar(a, b)).toBe(true);
  });

  // float comparision
  test("float number equal test", () => {
    let a = 12.303;
    let b = 12.303;
    expect(isSimilar(a, b)).toBe(true);
  });

  test("float number not equal test", () => {
    let a = 12.303;
    let b = 12.302;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("float and int number equal test", () => {
    let a = 12.0;
    let b = 12;
    expect(isSimilar(a, b)).toBe(true);
  });
  test("float and int number not equal test", () => {
    let a = 12.0000001;
    let b = 12;
    expect(isSimilar(a, b)).toBe(false);
  });
});
