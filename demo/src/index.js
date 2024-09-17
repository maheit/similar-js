import { isSimilar } from "similar-js"

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

