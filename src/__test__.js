

// import * as isSimilar from "similar-js"
import { isSimilar } from "similar-js"

// import similar from "similar-js" 

const previousUserDetails = [
    {
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
    },
    {
        _id: "6485d7b37b1dc2e7fca2fcb8",
        index: 1,
        guid: "3abd33c4-ecc7-4f1b-947b-5da8fae10eb6",
        isActive: false,
        balance: "$2,934.49",
        picture: "http://placehold.it/32x32",
        age: 24,
        eyeColor: "brown",
        name: "Nunez Gilliam",
        gender: "male",
        company: "LIQUIDOC",
        email: "nunezgilliam@liquidoc.com",
        phone: "+1 (807) 482-3613",
        address: "753 Oriental Boulevard, Madrid, Hawaii, 1447",
        about:
            "Consectetur est pariatur sint laborum adipisicing id eu mollit quis. Do ex ullamco sint et ullamco consectetur aliqua deserunt aliquip ex adipisicing duis. Aliqua aute consectetur non occaecat cillum Lorem. Velit voluptate qui ad eiusmod incididunt. Id adipisicing occaecat nisi consectetur. Irure enim reprehenderit nulla aliquip eu enim laboris fugiat commodo Lorem sit.\r\n",
        registered: "2018-01-18T07:24:57 -06:-30",
        latitude: 13.025603,
        longitude: -105.261093,
        tags: ["non", "cillum", "quis", "incididunt", "veniam", "tempor", "ipsum"],
        friends: [
            {
                id: 0,
                name: "Katherine Wilkerson",
            },
            {
                id: 1,
                name: "Pruitt Robertson",
            },
            {
                id: 2,
                name: "Marsha Battle",
            },
        ],
        greeting: "Hello, Nunez Gilliam! You have 3 unread messages.",
        favoriteFruit: "banana",
    },
];

const newUserDetails = [
    {
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
    },
    {
        _id: "6485d7b37b1dc2e7fca2fcb8",
        index: 1,
        guid: "3abd33c4-ecc7-4f1b-947b-5da8fae10eb6",
        isActive: false,
        balance: "$2,934.49",
        picture: "http://placehold.it/32x32",
        age: 24,
        eyeColor: "brown",
        name: "Nunez Gilliam",
        gender: "male",
        company: "LIQUIDOC",
        email: "nunezgilliam@liquidoc.com",
        phone: "+1 (807) 482-3613",
        address: "753 Oriental Boulevard, Madrid, Hawaii, 1447",
        about:
            "Consectetur est pariatur sint laborum adipisicing id eu mollit quis. Do ex ullamco sint et ullamco consectetur aliqua deserunt aliquip ex adipisicing duis. Aliqua aute consectetur non occaecat cillum Lorem. Velit voluptate qui ad eiusmod incididunt. Id adipisicing occaecat nisi consectetur. Irure enim reprehenderit nulla aliquip eu enim laboris fugiat commodo Lorem sit.\r\n",
        registered: "2018-01-18T07:24:57 -06:-30",
        latitude: 13.025603,
        longitude: -105.261093,
        tags: ["non", "cillum", "quis", "incididunt", "veniam", "tempor", "ipsum"],
        friends: [
            {
                id: 0,
                name: "Katherine Wilkerson",
            },
            {
                id: 1,
                name: "Pruitt Robertson",
            },
            {
                id: 2,
                name: "Marsha Battle",
            },
        ],
        greeting: "Hello, Nunez Gilliam! You have 3 unread messages.",
        favoriteFruit: "banana",
    },
];

console.log(isSimilar(newUserDetails, previousUserDetails));
//   console.log(isSimilar.isSimilar(newUserDetails, previousUserDetails));
//   console.log(similar(newUserDetails, previousUserDetails));



console.log(isSimilar(10, 10))
// console.log(isSimilar.isSimilar(10, 10));
//   console.log(similar(10, 10));

// README.md conditions
console.log("-----------README.md-----------------")

console.log(isSimilar("str", "int"));
console.log(isSimilar("string", "string"));
console.log(isSimilar("str", 10));
console.log(isSimilar(10, 10));
console.log(isSimilar({}, null));
console.log(isSimilar({ env: "dev" }, { env: "dev" }));
console.log(isSimilar({ env: "dev" }, { env: "prod", "debug": false }));
console.log(isSimilar(undefined, [1]));
console.log(isSimilar([10, 20, 300], [20, 10]))
console.log(isSimilar([10, 20, 300], [20, 10, 40]))


console.log("--- meta ---")

console.log(isSimilar([1, 2, 3], [2, 1], { exactArray: false })); // true, because all the items in minimum length (second argument) array present in another array (first argument).

console.log(isSimilar([1, 2, 3], [2, 1], { exactArray: true })); // false, because all the items in minimum length (second argument) array present in another array (first argument). since meta option exactArray: true ensure that array should have same no.of item in both array and all of them should be equest may be order of elem may be changes

console.log(isSimilar([1, 2, 3], [2, 1], { exactArray: false, swapCompArray: false })); // false, because all the items in minimum length (second argument) array present in another array (first argument). since meta option swapCompArray: false ensure that base array should be the first argument itself so items present in first arg was not present in second argument

console.log(isSimilar([11, 3], [21, 1, 3, 11], { swapCompArray: false, exactArray: false })); // true, because all the items in first argument (which has lesser items in array, lesser array item will takes as base array for comparision) array present in second argument array.

console.log(isSimilar([21, 1, 3, 11], [11, 3], { swapCompArray: false, exactArray: false })); // false, because all the items in first argument array (because swapCompArray: false, so first argument always taken for base comparator) are not present in second argument array.

console.log(isSimilar({ name: "mahe" }, {}, { exactObject: false, swapCompObject: false })); // false, because second argument object atleast should include all the property of first argument object.

console.log(isSimilar({ name: "mahe" }, {}, { exactObject: false })); // true, since swap of argument possible due to default swapComparisonObject as true so second argument has the minimum property than first then it means another object (first argument) has all the property of seconf argument object so it return true.

console.log(isSimilar({ name: "mahe", school: "ICSA", "class": "10" }, { name: "mahe", school: "ICSA" }, { exactObject: true })); // false


console.log(isSimilar({ env: "dev" }, { env: "dev", "debug": true }, { exactObject: false })); //  { exactObject: false }

console.log(isSimilar([10, 20, 300], [20, 10], { exactArray: false })) // {exactArray: false}

console.log(isSimilar({ name: "mahe", school: "ICSA", "class": "10" }, { name: "mahe", school: "ICSA", "class": "10" })); // true, default meta options value is { exactObject: true,exactArray: true,swapCompObject: true,swapCompArray: true }

console.log(isSimilar({ name: "mahe", school: "ICSA", "class": "10" }, { name: "mahe", "class": "10" })); // true, default meta options value is { exactObject: true, exactArray: true, swapCompObject: true, swapCompArray: true }


console.log("----deep comparision-----")


console.log(isSimilar(newUserDetails, previousUserDetails));