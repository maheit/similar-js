import { isSimilar } from "../dist/index.js";
import { expect, jest, test } from "@jest/globals";

describe("Mixed Tests", function () {
  test("String and Number not equal test", () => {
    let a = "first";
    let b = 1;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("String and null not equal test", () => {
    let a = null;
    let b = "First";
    expect(isSimilar(a, b)).toBe(false);
  });

  test("String and undefined not equal test", () => {
    let a = "first";
    let b = undefined;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Number and undefined not equal test", () => {
    let a = 123;
    let b = undefined;
    expect(isSimilar(a, b)).toBe(false);
  });
  test("Null and undefined not equal test", () => {
    let a = null;
    let b = undefined;
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Null and null equal test", () => {
    let a = null;
    let b = null;
    expect(isSimilar(a, b)).toBe(true);
  });

  test("Undefined and undefined equal test", () => {
    let a = undefined;
    let b = undefined;
    expect(isSimilar(a, b)).toBe(true);
  });

  test("Object and Array not equal test", () => {
    let a = { a: "test sampel" };
    let b = [{ a: "test sampel" }];
    expect(isSimilar(a, b)).toBe(false);
  });

  test("Object and null not equal test", () => {
    let a = { a: "test sampel" };
    let b = null;
    expect(isSimilar(a, b)).toBe(false);
  });
});
