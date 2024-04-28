// Template String
let age = 22;
let firstName = "Hamza"

// "my name is Hamza and my age is 22"
// let aboutMe = "my name is " + firstName + " and my age is " + age;
// console.log(aboutMe);
// This is a lengthy method
// There is a shorter method to do this

 let aboutMe = `my name is ${firstName} and my age is ${age}`;
 console.log(aboutMe);
 // In this method we use backtics instead of single or double quotes and ${} to use a variable

 // undefined

 let fName; 
 // var and let can or cannot be assigned but const is always assinged a value otherwise it will throw error.
 console.log(typeof fName);

 // null

 let myVariable = null;
 console.log(myVariable,typeof myVariable);
 // it is telling type of null = object whY and WhY they did not change it's data-type?

 // Ans: It is a bug, error in Js. Millions of People have used this bug so the developers of js did not change it because if they change it, the code written by all the people will have to be changed and it will result in serious problem.

// BigInt
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER); // it tells how many big number which is = to 9007199254740991 we can store in variable. To store a more bigger number than this value we use BigInt 

let bigNumber = BigInt(123243251545145154151451345)
let newBigNumber = 234n // this is also BigInt
console.log(bigNumber);
console.log(newBigNumber);

// BigInt cannot be added to an ordinary number.
let bigIntNumber = 34n;
let ordinaryNumber = 34;
// console.log(bigIntNumber + ordinaryNumber);
// it will throw error
