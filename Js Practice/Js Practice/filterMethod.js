// Filter Even Numbers:
// Given an array of numbers [1, 2, 3, 4, 5, 6], use filter to create a new array with only the even numbers.

const simpleNumbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbersArray = simpleNumbersArray.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbersArray);

// Filter Strings Longer Than 3 Characters:
// Given an array of strings ['a', 'abc', 'abcd', 'ab'], use filter to create a new array with strings that are longer than 3 characters.

const alphabetStringsArray = ['a', 'abc', 'abcd', 'ab'];
const longStringsArray = alphabetStringsArray.filter((str) => {
    return str.length > 3;
})
console.log(longStringsArray);

// Filter Objects Based on Property:
// Given an array of objects [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], use filter to create a new array of objects where the name property starts with 'A'.

const people = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
const peopleWithA = people.filter((person) => {
   return person.name.startsWith('A');
});
console.log(peopleWithA);

// Filter Positive Numbers:
// Given an array of numbers [-1, 2, -3, 4, -5], use filter to create a new array with only the positive numbers.

const integersArray = [-1, 2, -3, 4, -5];
const positivesArray = integersArray.filter((num) => {
    return num > 0;
});
console.log(positivesArray);

// Filter Numbers Greater Than 10:
// Given an array of numbers [5, 10, 15, 20], use filter to create a new array with numbers greater than 10.

const arr = [5, 10, 15, 20];
const greaterThan10Arr = arr.filter((num) => {
    return num > 10;
});
console.log(greaterThan10Arr);

// Filter Non-null Values:
// Given an array [null, 'hello', null, 'world'], use filter to create a new array with non-null values.

let values = [null, 'hello', null, 'world'];
let nonNullValues = values.filter((value) => {
    return value !== null;
});
console.log(nonNullValues);

// Filter Numbers Divisible by 3:
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9], use filter to create a new array with numbers divisible by 3.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersDivisibleby3 = arr2.filter((number) => {
    return number % 3 === 0;
});
console.log(numbersDivisibleby3);

// Filter Strings Containing 'e':
// Given an array of strings ['apple', 'banana', 'cherry', 'date'], use filter to create a new array with strings containing the letter 'e'.

const fruitsArray = ['apple', 'banana', 'cherry', 'date'];
const fruitsWithE= fruitsArray.filter((fruit) => {
    return fruit.includes('e');
});
console.log(fruitsWithE);

// Filter Boolean Values:
// Given an array [true, false, true, false, true], use filter to create a new array with only the true values.

const booleansArray = [true, false, true, false, true];
const trueBooleans = booleansArray.filter((boolean) => {
    return boolean === true;
});
console.log(trueBooleans);

// Filter Empty Strings:
// Given an array of strings ['hello', '', 'world', '', '!'], use filter to create a new array with non-empty strings.

const arr3 = ['hello', '', 'world', '', '!'];
const nonEmptyStrings = arr3.filter((str) => {
    return str !== '';
});
console.log(nonEmptyStrings);
