import { isSimilar } from "../dist/bundle.min.js";
import { expect, jest, test } from "@jest/globals";

describe("Object Tests", function () {
  test("Compare two exactly equal objects", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: false,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: false,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    expect(isSimilar(a, b)).toBe(true);
  });
  test("Compare two not equal objects where one field value is different", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: false,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    expect(isSimilar(a, b)).toBe(false);
  });
  test("Compare two not equal objects where one field not included in second object", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
    };
    expect(isSimilar(a, b)).toBe(false);
  });
  test("Compare two not equal objects where one field not included in second object and exactObject meta config is false", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
    };
    expect(isSimilar(a, b, { exactObject: false })).toBe(true);
  });

  test("Compare two not equal objects where one field not included in second object and swapCompObject meta config is false", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
    };
    expect(isSimilar(a, b, { swapCompObject: false })).toBe(false);
  });

  test("Compare two not equal objects where one field not included in first object and swapCompObject meta config is false", () => {
    let a = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
    };
    let b = {
      _id: "6485d7b3910143f6c6612e43",
      index: 0,
      guid: "0d12fcb9-60cb-44c8-9c0b-3291000e101f",
      isActive: true,
      balance: "$3,190.82",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: "Carroll Whitfield",
      gender: "male",
      company: "UNI",
      email: "carrollwhitfield@uni.com",
      phone: "+1 (825) 495-2976",
      address: "624 Harden Street, Hebron, New York, 9263",
      about:
        "Dolore aliquip fugiat eiusmod deserunt officia do sit veniam qui ipsum mollit velit aliquip. Consequat pariatur labore duis eiusmod labore cillum. Minim dolor cillum id veniam nisi reprehenderit non proident sit ea. Voluptate eiusmod nostrud esse ipsum. Velit velit mollit ut sit esse irure. Enim magna eu aute amet adipisicing ad ut incididunt dolor minim mollit enim sunt irure. Qui velit excepteur eu nostrud ipsum id cupidatat cupidatat pariatur veniam proident duis.\r\n",
      registered: "2015-05-29T12:40:20 -06:-30",
      latitude: -83.967232,
      longitude: 166.790436,
      tags: ["sunt", "duis", "sit", "consectetur", "eiusmod", "culpa", "anim"],
      friends: [
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
      ],
      greeting: "Hello, Carroll Whitfield! You have 6 unread messages.",
      favoriteFruit: "apple",
    };
    expect(isSimilar(a, b, { swapCompObject: false, exactObject: false })).toBe(
      true
    );
  });

  test("Compare two not equal objects where one field not included in second object and exactObject and swapCompObject meta config is false", () => {
    let a = {
      name: "Maheshwaran G",
    };
    let b = {};
    expect(isSimilar(a, b, { exactObject: false, swapCompObject: false })).toBe(
      false
    );
  });

  test("Compare two not equal objects where one field not included in second object and exactObject meta config is false", () => {
    let a = {
      name: "Maheshwaran G",
    };
    let b = {};
    expect(isSimilar(a, b, { exactObject: false })).toBe(true);
  });
});
