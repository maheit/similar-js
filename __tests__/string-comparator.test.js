import { isSimilar } from "../dist/index.js";
import { expect, jest, test } from "@jest/globals";

describe("String Tests", function () {
  test("String equal test", () => {
    let a = "first";
    let b = "first";
    expect(isSimilar(a, b)).toBe(true);
  });

  test("String not equal test", () => {
    let a = "first";
    let b = "First";
    expect(isSimilar(a, b)).toBe(false);
  });
});
