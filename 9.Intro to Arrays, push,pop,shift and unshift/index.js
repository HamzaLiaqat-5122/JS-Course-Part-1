// intro to arrays
// arrays are ordered collection of items

// reference type

// how to create arrays

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let numbers = [1, 2, 3, 4];
console.log(numbers);
// Any data-type can be stored in an array.
let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(mixed);

fruits[1] = "banana"
console.log(fruits);  
// we can change items at an index of array by using array[] = "" method

console.log(typeof fruits); // object

console.log( Array.isArray(fruits));
// Array.isArray method is used to check array or not it gives true ot false.

let obj = {}; // object literal
console.log(typeof obj);
console.log( Array.isArray(obj));


// Some Array Methods

// Arrays are Mutable means that any operation performed on array will change the orginal array

let fruits1 = ["orange", "peach", "pear"];

// push --> Adds a value in an array at the end.

fruits1.push("banana");
console.log(fruits1);

// pop --> removes and returns last element or value of an array.
let poppedFruit = fruits1.pop(fruits1);
console.log(fruits1);
console.log("popped fruit is", poppedFruit ); // it returns banana

// unshift --> Adds an element at the start of an array
fruits1.unshift("apple");
console.log(fruits1); // we can add more fruits by using unshift method.

// shift --> removes an element from the start
let removedFruit = fruits1.shift();
console.log(fruits1);
console.log(`removed fruit is ${removedFruit}`);
 
// push and pop are fast as compared to shift and unshift.
