const arr1 = [2, 4, -6, 8, 10];
const negativeNumber = arr1.some((num) => num < 0);
console.log(negativeNumber);

const arr2 = ["apple", "banana", "orange", "grapefruits"];
const greaterThan10 = arr2.some(fruit => fruit.length > 10);
console.log(greaterThan10);

const arr3 = [1, 3, 5, 7, 10];
const isEvenOrOdd = arr3.some((num) => num % 2 === 0);
console.log(isEvenOrOdd);

const arr4 = [true, 1, "hello", {name: "John"}];
const isBoolean = arr4.some(value => typeof value === 'boolean');
console.log(isBoolean);

const arr5 = [5, 10, 15, 20, 21];
const divisibleBy7 = arr5.some(num => num % 7 === 0);
console.log(divisibleBy7);

const arr6 = [1, 2, 3, "hello", {name: "John"}];
const dataTypeObj = arr6.some(value => typeof value === 'object');
console.log(dataTypeObj);

