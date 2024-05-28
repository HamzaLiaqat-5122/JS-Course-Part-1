// ternary operator / conditional operator
-
// let age = 4;
// let drink;

// if(age >= 5){
//     drink = "coffee"
// } else{
//     drink = "milk";
// }

// console.log(drink);

// This is a little big code but we can write it shorter with ternary operator.

let age = 8;
let drink = age > 5 ? "cofee" : "milk";
console.log(drink);

// and & or operator

let firstName = "Hamza";
let age1 = 19;
/*
if(firstName[0] === "H"){
    console.log("your name starts with h");
}

if(age > 18){
    console.log("you are above 18");
} */
// this method is long and it checks conditions separately. To check condtion in one statement we use And operator or Or operator

/* if(firstName[0] === "H" && age1 > 18){
    console.log("Name starts with H and above 18");
} else{
    console.log("inside else");
} */
// if both conditions in () after if are true then it's code will be executed. If one condition is false and other is true yhen code will not run.

if (firstName[0] === "H" || age1 > 18) {
  // console.log("inside if");
} else {
  // console.log("inside else");
}
// In case of OR operator any one condition out of two or more conditions will be true OR operator will return false if both the conditions are false.

// Nested if else

// Making a Guess Number Game.

// winning number 19
// if 19 your guess is right
// if less than 19 too low
// if greater than 19 too high

//let winningNumber = 19;
// let userGuess = +prompt("Guess a number"); // prompt takes input as string
// console.log(userGuess, typeof userGuess);

// if(userGuess === winningNumber){
// console.log("Your Guess is right!!");
//} else{
// if(userGuess < winningNumber){
//   console.log("too low !!!");
//} else {
//   console.log("too high !!!");
//}
//}

// Note: In Nested if-else we can nest more if and else statements in if and else statements like above example.

// if, else if , else

// if
// else if
// else if
// else if
// else

let tempInDegree = -5;

if (tempInDegree < 0) {
  console.log("extremely cold outside");
} else if (tempInDegree < 16) {
  console.log("it is cold outside");
} else if (tempInDegree < 25) {
  console.log("weather is okay");
} else if (tempInDegree < 35) {
  console.log("lets go for swim");
} else if (tempInDegree < 45) {
  console.log("turn on AC");
} else {
  console.log("too hot!");
}
// if one condition is satisfied then other conditions will not be checked.

let tempInDeg = 46;

if(tempInDeg > 45){
    console.log("too hot!");
} else if(tempInDeg > 35 ){
    console.log("turn on AC");
} else if(tempInDeg > 25 ){
    console.log("lets go for swim");
} else if(tempInDeg > 16 ){
    console.log("weather is okay");
} else if(tempInDeg > 0 ){
    console.log("it is cold outside");
} else{
    console.log("extremely cold outside");
}


// switch statement

// first we will do it with if,else if, else statement

/* let day = 0;

if(day === 0){
    console.log("Sunday");
}else if(day === 1){
    console.log("Monday");
} else if(day === 2){
    console.log("Tuesday");
} else if(day === 3){
    console.log("Wednesday");
} else if(day === 4){
    console.log("Thursday");
} else if(day === 5){
    console.log("Friday");
} else if(day === 6){
    console.log("Saturday");
} else{
    console.log("Invalid Day");
} */

// Now with Switch-case Statement

let day = 2

switch (day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}
