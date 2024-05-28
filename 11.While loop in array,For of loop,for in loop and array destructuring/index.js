// while loop in array
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
let i = 0
while(i < fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);

// for of loop in array
const fruits1 = ["apple","mango","grapes"];

for(let fruit of fruits1){
    console.log(fruit);
}

// for in loop in array

for (let index in fruits1){
    console.log(fruits1[index]);
} // note: we mostly use for-of and traditional for loop in arrays.

// array destructuring
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(`value of myvar1 ${myvar1}`);
// console.log(`value of myvar2 ${myvar2}`);

let [myvar1, myvar2, ...myNewArray] = myArray; // myvar1 and myvar2 have become variables
// let myNewArray = myArray.slice(2)
myvar1 = "value changed";
console.log(`value of myvar1 ${myvar1}`);
console.log(`value of myvar2 ${myvar2}`); // index can be skipped by writing , ,
console.log(myNewArray);