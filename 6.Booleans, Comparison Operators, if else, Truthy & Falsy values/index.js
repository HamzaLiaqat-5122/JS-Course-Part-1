// booleans & comparison operator

// booleans
// true, false

let num1 = 7;
let num2 = 7;

console.log(num1>num2);
console.log(num2>=num1);

// == vs === 
console.log(num1 == num2);
 // true because they are numbers and are equal if i write num1 = "7" then it will also return true however num1 has "7" string and num 2 = 7 is a number.
console.log(num1 === num2);
// it will return false if num1 = "7" and num2 = 7 because === operator checks data-types
// Other Programming Languages always check data-types

let num3 = 5;
let num4 = "5";

console.log(num3 != num4);
console.log(num3 !== num4);

// if else condition

let age = 18;

if(age >= 18){
    console.log("User can play ddlc");
} else {
    console.log("User can play mario");
}

let num = 14;

if(num % 2 === 0){
    console.log("even");
} else{
    console.log("odd");
}

// truthy and falsy values

// falsy values

// false
// ""
// null
// undefined
// 0

let firstName; // "" null 0 false undefined will return false

if(firstName){
    console.log(firstName);
} else{
    console.log("firstName is kinda empty");
}
// As firstName is undefined so it is falsy value and if will not return true because firstName is falsy value and else will execute.

// truthy
// "abc"
// 1, -1