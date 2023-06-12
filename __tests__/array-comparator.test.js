import { isSimilar } from "../src/index.js";
import { expect, jest, test } from "@jest/globals";

describe("Array Tests", function () {
  test("Compare two exactly equal Arrays", () => {
    let a = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    let b = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    expect(isSimilar(a, b)).toBe(true);
  });
  test("Compare two not equal Arrays where one field value is different in array element", () => {
    let a = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook modified",
      },
    ];
    let b = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    expect(isSimilar(a, b)).toBe(false);
  });
  test("Compare two not equal array where one array item not included in second array", () => {
    let a = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    let b = [
      {
        id: 0,
        name: "Ashley Lyons",
      },

      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    expect(isSimilar(a, b)).toBe(false);
  });
  test("Compare two not equal array where one array item not included in second array and exactArray meta config is false", () => {
    let a = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    let b = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    expect(isSimilar(a, b, { exactArray: false })).toBe(true);
  });

  test("Compare two not equal array where one array item not included in first array and swapCompArrayt meta config is false", () => {
    let a = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    let b = [
      {
        id: 0,
        name: "Ashley Lyons",
      },
      {
        id: 1,
        name: "Ophelia Erickson",
      },
      {
        id: 2,
        name: "Britney Cook",
      },
    ];
    expect(isSimilar(a, b, { swapCompArray: false, exactArray: false })).toBe(
      true
    );
  });
});
