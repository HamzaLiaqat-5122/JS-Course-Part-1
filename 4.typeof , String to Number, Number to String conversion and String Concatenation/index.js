// typeof operator

// data types (Primitive)
// string "harshit"
// Symbol
// number 2, 4, 5, 6
// booleans
// undefined
// null
// BigInt

let age = 22;
let firstName = "hamza";

// console.log(typeof age, typeof firstName);


// convert number to string
console.log(typeof (age + ""));

// convert string to number

let myStr = +"34"
console.log(typeof myStr);

let age2 = "18";
age2 = Number(age2);
console.log(typeof age2);

let age3 = 19;
age3 = String(age3);
console.log(typeof age3);

// string concatenation

let str1 = "Hamza";
let str2 = "Liaqat";

let fullName = str1 + " " + str2
console.log(fullName);

let string1 = "17";
let string2 = "10";

let newString = string1 + string2
console.log(newString); // because 17 and 10 are strings

let string3 = "4";
let string4 = "6";

let newString1 = +string3 +  +string4; // adding + before strings converts them into number
console.log(newString1);
