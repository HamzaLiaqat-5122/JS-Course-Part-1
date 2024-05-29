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


// What is the difference between forEach and map in JavaScript? 
// The forEach method executes a provided function on each element and returns undefined, whereas the map method executes a provided function on each element and returns a new array with the results.

// Map Method

// const numbers = [3, 4, 6, 1, 8];

// const square = function (number){
//     return number * number;
//     // if we do console.log(number * number); then it will not return anything so numbers will be printed but array will be undefined.
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber = numbers.map((number, index) => {
//     return ` index: ${index}, ${number * number}`;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "hamza", age: 19},
//     {firstName: "subhan", age: 18},
//     {firstName: "usman", age: 19},
//     {firstName: "ayan", age: 8},
// ]

// const userNames = users.map((user) => {
//     return user.firstName;
// });
// console.log(userNames);

// Filter Method

// const numbers = [1, 3, 2, 6, 4, 8];

// const isEven = function(number){
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
// filter's function callback returns true or false.

// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// Reduce Method

// const numbers = [1, 2, 3, 4, 5, 10];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

// // accumulator , current value, return
// // 1                  2           3
// // 3                  3           6
// // 6                  4           10
// // 10                 5           15
// // 15                 10          25

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const total = userCart.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.price;
// }, 0);
// console.log(total);

// // accumulator , current value, return
// // 0                  {}         12000
// // 12000              22000      34000
// // 34000              15000      49000   

// Sort Method
// it mutates original array

// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// const numbers = [5, 9, 1200, 400, 3000]; // 5, 9, 400, 1200, 3000 = expected output
// numbers.sort(); 
// console.log(numbers); // but output = 1200, 3000, 400, 5, 9;
// The sort() method is not sorting it in ascending form. because javascript is sorting it considering that it is array of strings not numbers so number are converted to string like "5", "9", "1200", "400", "3000"

// ["5", "9", "1200", "400", "3000"];
// [53, 57, 49, 52, 51];

// const userNames = ['hamza', 'abcd', 'mohid', 'subhan', 'aabc', 'ABC', 'HAMZA'];
// userNames.sort();
// console.log(userNames); // ['ABC','HAMZA','aabc','abcd','hamza','mohid','subhan'];

// numbers.sort((a, b) => {
//      return a - b;
// });

// numbers.sort((a, b) => a - b);
// console.log(numbers); // now we get 5, 9, 400, 1200, 3000 = expected output

// 1200, 410
// a - b ---> 790
// a - b ---> positive (greater than 0)
// 410, 1200

// a - b ---> negative
// 5, 9 ---> -4 // if we have to sort in descending we write b - a;

// price lowtoHigh HightoLow
// const products = [
//     {productId: 1, productName: "p1", price: 300},
//     {productId: 2, productName: "p2", price: 3000},
//     {productId: 3, productName: "p3", price: 200},
//     {productId: 4, productName: "p4", price: 8000},
//     {productId: 5, productName: "p5", price: 500},
// ];

// // lowtoHigh
// const lowtoHigh = products.slice(0).sort((a, b)=> {
//    return a.price - b.price;
// });

// console.log(lowtoHigh);

// const HightoLow = products.slice(0).sort((a, b)=> {
//     return b.price - a.price;
//  });

//  console.log(HightoLow);
 