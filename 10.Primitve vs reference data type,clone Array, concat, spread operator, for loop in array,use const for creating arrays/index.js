// primitive vs reference data types

// primitive
// let num1 = 6;
// let num2 = num1;
// console.log(`value of num1 is ${num1}`);
// console.log(`value of num2 is ${num2}`);
// num1++;
// console.log("after incrementing num1");
// console.log(`value of num1 is ${num1}`);
// console.log(`value of num2 is ${num2}`);

// reference data type
// array
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(`array1 ${array1}`);
// console.log(`array2 ${array2}`);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);

// how to clone array

// how to concatenate two arrays

let arr1 = ["item1", "item2"];
// let arr2 = ["item1", "item2"]; // now arr1 and arr2 are different.
// let arr2 = arr1.slice(0).concat(["item3","item4"]);  //this is one method to make arr1 and arr2 different. it is faster method
// let arr2 = [].concat(arr1); // this will make a new arr2 with values of arr1.
// new way
// spread operator

 let arr2 = [...arr1, "item3", "item4"]; // this will make a new array with same values of arr1 buth both arr2 and arr1 are different.People use this method more.

arr1.push("item3");

console.log(arr1 === arr2); // false
console.log(arr1, arr2);

let arr3 = ["item3", "item4"];
let oneMoreArr = ["item5", "item6"];
let arr4 = [...arr3, ...oneMoreArr];

console.log("arr4",arr4);

// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i = 0; i<= 9; i++){
//     console.log(i);
// }

// length is the most important property of an array.
console.log(fruits.length);
console.log(fruits[fruits.length-1]); // length-1 gives element at last index.

let fruits2 = [];
for(let i = 0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

// use const for creating array
const pi = 3.14;
console.log(pi);
// pi = 12 we cannot reassign constant variable.

const fruits3 = ["apple", "mango"];
fruits3.push("banana");
console.log(fruits3);