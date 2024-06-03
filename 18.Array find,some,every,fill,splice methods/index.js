// Find Method

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = isLength3("dog")
// console.log(ans);

// const ans = myArray.find((str) => str.length === 3); // it talks about first occurence
// console.log(ans); // cat

// const users = [
//     {userId : 1, userName: "hamza"},
//     {userId : 2, userName: "subhan"},
//     {userId : 3, userName: "usman"},
//     {userId : 4, userName: "anas"},
//     {userId : 5, userName: "mohid"},
// ];

// const myUser = users.find((user) => user.userId === 3);
// console.log(myUser);

// Every method

// let numbers = [2, 4, 6, 8, 10];

// let isEven = numbers.every(number => number % 2 === 0);
// console.log(isEven);

// callback function ---> true / false (boolean)

// every method ---> true / false (boolean)

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// // check every product price < 30,000

// const price = userCart.every((item) => {
//     return item.price < 30000;
// })
// console.log(price);
// Note: !! converts values into boolean

// some method

// const numbers = [3, 5, 8, 9];
// find even
// if some method find any one of this number even it will return // true.

// const ans = numbers.some((number) => number % 2 === 0); // if on any one number this condition is true it will return true.
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
//     {productId: 4, productName: "macbook", price: 250000},
// ];

// const price = userCart.some(cartItem => cartItem.price > 100000);
// console.log(price);

// // fill method it changes original array
// // value, start, end

// const myArray = new Array(10).fill(0)
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const filledArray = myArray.fill(0, 2, 5)
// console.log(filledArray);

// splice method  // This also changes original array
// start, delete, insert

// const myArray = ['item1', 'item2', 'item3']; 

// delete
// const myNewArray = myArray.splice(1, 1,)
// console.log(myNewArray); // ['item2'];
// console.log(myArray); // ['item1','item3'];

// // insert

// myArray.splice(1, 0, 'inserted item');

// console.log(myArray);

// insert and delete simultaneously

// const deletedItem = myArray.splice(1, 2, "item3", "item4")
// console.log(myArray);
// console.log(deletedItem);