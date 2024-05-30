const arr1 = [1, 2, 4, 5];
arr1.splice(2, 0, 3);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4, 5];
const removedElement = arr2.splice(2, 1);
console.log(arr2); // Output: [1, 2, 4, 5]
console.log(removedElement); // Output: [3]

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 'a', 'b');
console.log(arr3); // Output: [1, 2, 'a', 'b', 5]

const arr4 = [1, 2, 3, 4, 5];
arr4.splice(2);
console.log(arr4); // Output: [1, 2]

const arr5 = [1, 2, 3, 4, 5];
arr5.splice(-2);
console.log(arr5); // Output: [1, 2, 3]

const arr6 = [1, 2, 6, 7];
const insertArr = [3, 4, 5];
arr6.splice(2, 0, ...insertArr);
console.log(arr6); // Output: [1, 2, 3, 4, 5, 6, 7]
