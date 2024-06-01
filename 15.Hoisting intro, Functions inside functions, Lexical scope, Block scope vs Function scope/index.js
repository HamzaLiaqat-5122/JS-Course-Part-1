// Hoisting intro (later covered in detail).

// function hello() {
//     console.log("hello world!");
// }

// hello(); This is simple example how function works.
// But if we call the function above function what will happen

// hello();

// function hello() {
//     console.log("hello world!");
// }

// This still works however we have called the function before making the function. But this works only in function declaration.

// Now we use function expression to check this.

// hello();

// const hello = function() {
//     console.log("hello world!");
// }
// error can't access 'hello' before initialization.

// Now using arrow function to check this.

//  hello();

//  const hello = () => {
//     console.log("hello world!");
//  }

// Uncaught reference error: Cannot access 'hello' before initialization.

// Another Example

//  var hello = "hello";
//  console.log(hello);

//  let hello = "hello";
//  console.log(hello);

//  const hello = "hello";
//  console.log(hello);

// we are using console.log after declaring and assigning variables.
// But what if we console.log(hello) before declaring and assigning variable

// console.log(hello);
// var hello = "hello" // undefined

// console.log(hello);
// let hello = "hello" // cannot access hello before initialization

// console.log(hello);
// const hello = "hello" cannot access hello before initialization

// None of above example works var prints undefined while let and const give error.

// Functions inside Function
const app = () => {
  const myFunc = () => {
    console.log("hello from myFunc");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  const mu1 = (num1, num2) => num1 * num2;

  console.log("inside app");
  myFunc();
  console.log(addTwo(2, 4));
  console.log(mu1(2, 4));
};
app();

// Lexical scope
const myVar = "value1";

function myApp() {
  function myFunc() {
    // const myVar = "value59";
    const myFunc2 = () => {
    console.log("inside myFunc", myVar); // myVar = value59
    // if we comment value59 variable then it will give value1.
    }
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}

myApp();

// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//    let firstName = "hamza"; // block
//    console.log(firstName); // hamza
// }
// console.log(firstName); it will give error we cannot use console.log outside {} blocks which is called block scope. it works with let and const and not with var.

// {
//   const firstName = "mohid";
//   console.log(firstName);
// }
// // we can declare same variables in different blocks.

// const firstName = "garima";
// console.log(firstName);

// {
//     var firstName = "hamza";
// }

// console.log(firstName); // it works because var is global scope.

function myApp1(){
    if(true){
        var firstName = "hamza";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp1();