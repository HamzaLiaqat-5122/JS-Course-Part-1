// Reduce Method

// 1. Sum of All Numbers:
// Given an array of numbers [1, 2, 3, 4, 5], use reduce to calculate the sum of all the numbers.

const arr = [1, 2, 3, 4, 5];
const sumOfArr = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sumOfArr);

// 2. Product of All Numbers:
// Given an array of numbers [1, 2, 3, 4, 5], use reduce to calculate the product of all the numbers.

const arr2 = [1, 2, 3, 4, 5];
const productofArr2 = arr2.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});
console.log(productofArr2);

// 3. Find the Maximum Number:
// Given an array of numbers [1, 3, 5, 2, 4], use reduce to find the maximum number.

const arr3 = [1, 3, 5, 2, 4];
const maximumOfArr3 = arr3.reduce((accumulator, currentValue) => {
   return (currentValue > accumulator ? currentValue : accumulator)
});
console.log(maximumOfArr3);

// 4. Count Occurrences of an Element:
// Given an array of strings ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'], use reduce to count the number of times the string 'apple' appears.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const apple = fruits.reduce((accumulator, currentValue) => {
    return currentValue === 'apple' ? accumulator + 1 : accumulator;
},0);
console.log(apple);

// 5. Flatten a 2D Array:
// Given a 2D array [[1, 2], [3, 4], [5, 6]], use reduce to flatten it into a single array.

const twoDArray = [[1, 2], [3, 4], [5, 6]];
const flatten = twoDArray.reduce((accumulator, currentValue) => {
   return accumulator.concat(currentValue);
}, );
console.log(flatten);
// 6. Create a Frequency Map:
// Given an array of strings ['cat', 'dog', 'cat', 'bird', 'dog', 'dog'], use reduce to create an object that represents the frequency of each string.

let animals = ['cat', 'dog', 'cat', 'bird', 'dog', 'dog'];
let frequency = animals.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(frequency); // Outputs {cat: 2, dog: 3, bird: 1}

// 7. Concatenate Strings:
// Given an array of strings ['Hello', ' ', 'World', '!'], use reduce to concatenate them into a single string.

let words = ['Hello', ' ', 'World', '!'];
let sentence = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(sentence); // Outputs 'Hello World!'

// 8. Calculate Average:
// Given an array of numbers [10, 20, 30, 40, 50], use reduce to calculate the average of the numbers.

let numberss = [10, 20, 30, 40, 50];
let average = numberss.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue) / numberss.length; 
});
console.log(average);
// 9. Remove Duplicates:
// Given an array of numbers [1, 2, 2, 3, 4, 4, 5], use reduce to create a new array without duplicates.

let numbersss = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = numbersss.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueNumbers); // Outputs [1, 2, 3, 4, 5]


// 10.Group Objects by Property:
// Given an array of objects [{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}], use reduce to group these objects by their type property.

let items = [
    {type: 'fruit', name: 'apple'},
    {type: 'vegetable', name: 'carrot'},
    {type: 'fruit', name: 'banana'}
  ];
  let grouped = items.reduce((accumulator, currentValue) => {
    (accumulator[currentValue.type] = accumulator[currentValue.type] || []).push(currentValue);
    return accumulator;
  }, {});
  console.log(grouped); 
  // Outputs { 
  //   fruit: [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}], 
  //   vegetable: [{type: 'vegetable', name: 'carrot'}]
  // }
  