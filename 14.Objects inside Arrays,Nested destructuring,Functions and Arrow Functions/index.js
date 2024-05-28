// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName: "hamza", gender: "male"},
    {userId: 2, firstName: "usman", gender: "male"},
    {userId: 3, firstName: "subhan", gender: "male"},
];

for(let user of users){
    console.log(user.userId);
}

// Nested destructuring
const users1 = [
    {userId: 1, firstName: "hamza", gender: "male"},
    {userId: 2, firstName: "usman", gender: "male"},
    {userId: 3, firstName: "subhan", gender: "male"},
];

const [{firstName}, , {gender}] = users1;
console.log(firstName);
console.log(gender);

// Functions
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// } function declaration

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// } function expression
//  singHappyBirthday();

function sumThreeNumbers(number1, number2, number3 /* parameter */) {
    return number1 + number2 + number3
}
// Function call,invoke or run
const returnedValue =  sumThreeNumbers(4, 5, 4 /* argument */);
console.log(returnedValue);

// isEven
// input : 1 number
// output: true, false

// function isEven(number){
//  if(number % 2 === 0){
//     return true;
//  }
//   return false;
// }

// shorter way

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(5));

// Example 2

// input: string
// output: firstcharacter

function firstChar(anyString){
    return anyString[0]
}

console.log(firstChar("der"));

// Example 3

// input : Array, target (number)
// output : index of target if target present in array

function findTarget(array, target){
    for(let i = 0; i< array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 8);
console.log(ans);

// Arrow functions

const singHappyBirthday = () => {
    console.log("happy birthday to you");
}

singHappyBirthday();

const isEvenn = number => number % 2 === 0; // when one parameter no paranthesis

console.log(isEvenn(2));