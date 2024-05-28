// important array methods

// const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index){
//     console.log("index is", index);
//     console.log(`${number} * 2 = ${number * 2}`);
// }

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);
// multiplyBy2(numbers[2], 2);
// multiplyBy2(numbers[3], 3);
// This can be done by using for loop instead of calling the function 4 times

// for(let i = 0; i < numbers.length; i++){
//     multiplyBy2(numbers[i], i);
// }
// This can be done in only one line by using forEach Method.

// numbers.forEach(multiplyBy2);

// We can use Function in ForEach as input 

// numbers.forEach(function(number,index){
// console.log(`The number is ${number} and index is ${index}`)
// })

// numbers.forEach(function(number,index){
//     console.log(number * 2 , index);
// })

// const users = [
//     {firstName : "hamza", age : "19"},
//     {firstName : "mohid", age : "18"},
//     {firstName : "usman", age : "17"},
//     {firstName : "subhan", age : "16"}
//  ]

// users.forEach(function(name){
//     console.log(name.firstName);
// });

// making this as arrow function

// users.forEach(name => {
//     console.log(name.firstName);
// });

// with for loop same result

// for(let user of users){
//     console.log(user.firstName);
// }

// let arr = [2, 3, 4, 5, 6];
// arr.forEach((number) => {
//     console.log(number * number);
// })

// // Write a function that takes an array of strings and prints their lengths.

// let arr1 = ['Lahore','Multan','Karachi'];

// arr1.forEach((number) => {
//  console.log(number.length);
// })

// arr.forEach((number) => {
//  console.log(5 *(2 + 6) / 2);
// })

