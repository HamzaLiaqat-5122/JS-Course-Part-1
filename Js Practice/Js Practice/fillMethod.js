const arr1 = new Array(10).fill(0);
console.log(arr1); // Output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const arr2 = new Array(5).fill(false).fill(true, 5);
console.log(arr2); // Output: [false, false, false, false, false, true, true, true, true, true]

const arr3 = new Array(8).fill("apple").fill("banana", 2, 4);
console.log(arr3); // Output: ["apple", "apple", "banana", "banana", "apple", "apple", "apple", "apple"]

const arr4 = new Array(6).fill().map((_, index) => (index + 1) * 2);
console.log(arr4); // Output: [2, 4, 6, 8, 10, 12]


const arr5 = Array.from({ length: 7 }, (_, index) => index + 1).fill().map(num => num * num);
console.log(arr5); // Output: [1, 4, 9, 16, 25, 36, 49]
